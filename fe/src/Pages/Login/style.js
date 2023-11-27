import styled from "styled-components";

import arroba from '../../assets/vetores/arroba.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


    button{
    width: 200px;
    height: 50px;
  }

  @media screen and (min-width: 768px){
    button{
      width: 360px;
      height: 60px;
    }
  }
`;

export const ModalOverlay = styled.div`
  background-color: gray;
`;


export const ModalContainer = styled.div`
  width: 731px;
  height: 864px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const ModalTitle = styled.div`
  display: grid;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 20px;
  color: black;

  h2{
    font-size: 38px;
    text-align: center;
  }

  span{
    font-size: 18px;
    font-weight: 400;
    text-align: center;
  }
`;

export const ModalClose = styled.div`
  position: fixed;
  top: 45px;
  left: 680px;

  button{
    background: none;
    color: #C60202;
    font-size: 28px;
    outline: none;
    border: none;
  }
`;

export const ModalFormLogin = styled.div`
    display: flex;
    flex-direction: column;
    gap: 46px;

    input{
      width: 359px;
      height: 60px;
      background: #FFF;
      border-radius: 6px;
      border: 1px solid #CDCDCD;
      outline: none;
      color: #FF7020;
      padding: 8px;
    }

    input:first-child{
      background: url(${arroba});
      background-repeat: no-repeat;
      background-position: right;
      background-position-x: 97%;
      background-size: 1.5em;
    }

    input:focus{
      border: 1px solid #FF7020;
    }
`;

export const ModalFooter = styled.div`
  color: black;

  span{
    color: #FF7020;
  }
`;
