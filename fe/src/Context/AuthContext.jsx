import PropTypes from 'prop-types';
import { createContext } from "react";

import UserService from "../services/UserService";

const Context = createContext();

function AuthProvider({ children }) {

  async function login(email, password) {
    const user = {
      email,
      password
    }
    const { token } = await UserService.login(user);

    localStorage.setItem('token', token);
  }


  return(
    <Context.Provider value={{ login }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };

AuthProvider.propTypes = {
  children: PropTypes.node
}
