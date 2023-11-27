import styled from "styled-components";

import close from '../../assets/vetores/close.svg'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(196, 196, 196, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  width: 280px;
  height: 464px;
  background-color: white;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h1{
    font-size: 12px;
    color: #222;
  }

  img{
    width: 220px;
    height: 220px;
  }

  button{
    width: 180px;
    height: 35px;
    font-size: 12px;
  }

  @media screen and (min-width: 768px){
    width: 400px;
    height: 500px;

    h1{
    font-size: 16px;
  }

  img{
    width: 320px;
    height: 220px;
  }

  button{
    width: 200px;
    height: 40px;
    font-size: 12px;
  }
  }

  @media screen and (min-width: 1024px){
    width: 500px;
    height: 550px;

    h1{
      font-size: 20px;
    }

    button{
      width: 240px;
      height: 40px;
      font-size: 14px;
    }
  }

  @media screen and (min-width: 1920px){
    width: 729px;
    height: 864px;

    h1{
      font-size: 28px;
    }

    img{
      width: 440px;
      height: 318px;
    }

    button{
      width: 359px;
      height: 59px;
      font-size: 18px;
    }
  }
`;

export const ContainerClose = styled.div`
  width: 100%;
  height: 24px;
  text-align: right;
  padding: 16px;

  input{
    width: 18px;
    height: 18px;
    border: none;
    outline: none;
    cursor: pointer;
    background: url(${close});
    background-repeat: no-repeat;
    background-position: right;
    background-position-x: 97%;
    background-size: 1.5em;
  }

`;

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 90%;
`;
