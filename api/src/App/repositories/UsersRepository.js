const { v4 } = require('uuid');

const db = require('../../database');

class UsersRepository {
  async findByEmail(email) {
    const [row] = await db.query(`
      SELECT *
      FROM users
      WHERE email = $1
    `, [email]);
    return row;
  }

  async create({
    email, hashedPassword
  }) {
    const [ row ] = await db.query(`
      INSERT INTO users(email, password)
      VALUES($1, $2)
      RETURNING *
    `, [email, hashedPassword]);
    return row;
  }
}

module.exports = new UsersRepository();
