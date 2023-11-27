import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
  }

  body{
    background-color: white;
    font-size: 16px;
    margin: auto;
  }

  button{
    cursor: pointer;
  }
`;
