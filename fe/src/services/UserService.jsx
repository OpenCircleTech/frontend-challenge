import HttpClient from "./utils/httpClient";

const url = "http://localhost:3001/";

class UsersService {
  constructor() {
    this.httpClient = new HttpClient(url);
  }

  login(user) {
    return this.httpClient.post('auth', user);
  }

  create(user) {
    return this.httpClient.post('createAccount', user);
  }
}

export default new UsersService();
