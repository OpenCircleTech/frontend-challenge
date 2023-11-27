var jwt = require('jsonwebtoken');
var bcrypt = require("bcryptjs");
const UsersRepository = require('../repositories/UsersRepository');

class UserController {
  async login(request, response) {
    const { email, password } = request.body;

    const user = await UsersRepository.findByEmail(email);

    if (!user) {
      return response
        .status(401)
        .json({ error: "Invalid credentials or email not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return response
        .status(401)
        .json({ error: "Invalid credentials or email not found" });
    }

    const accessToken = await jwt.sign(
      { sub: user.id }, process.env.JWT_SECRET, { expiresIn: '1 day' }
    );

    response.json({ token: accessToken });
  }

  async store(request, response) {
    const {
      email,
      password,
    } = request.body;

    if (!email) {
      return response.status(400).json({ error: "Email is required!" });
    }

    if (!password) {
      return response.status(400).json({ error: "Password is required!" });
    }

    const emailExists = await UsersRepository.findByEmail(email);

    if (emailExists) {
      return response
        .status(400)
        .json({ error: "This e-mail is already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const contact = await UsersRepository.create({
      email,
      hashedPassword,
    });

    const accessToken = await jwt.sign(
      { sub: contact.id }, process.env.JWT_SECRET, { expiresIn: '1 day' }
    );

    response.status(201).json({ token: accessToken });
  }
}

module.exports = new UserController();
