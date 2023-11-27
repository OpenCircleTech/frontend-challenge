import styled, { keyframes } from "styled-components";

import close from '../../assets/vetores/close.svg'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const scaleIn = keyframes`
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
`;

export const Overlay = styled.div`
  background: rgba(196, 196, 196, 1);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.3s;
`;

export const Container = styled.div`
  background: #fff;
  width: 280px;
  height: 75%;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  animation: ${scaleIn} 0.2s;

  @media screen and (min-width: 768px){
    width: 460px;
  }

  @media screen and (min-width: 1440px){
    width: 631px;
  }
`;

export const ContainerCloseModal = styled.div`
  width: 100%;
  text-align: right;

  input{
    width: 24px;
    height: 22px;
    border: none;
    cursor: pointer;
    background: url(${close});
    background-repeat: no-repeat;
    background-position: right;
  }
`;

export const TitleModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  h1 {
    font-size: 18px;
  }

  p {
    font-size: 10px;
  }

  @media screen and (min-width: 768px){
    h1 {
      font-size: 28px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const LogoModal = styled.div`
  width: 100%;

  @media screen and (min-width: 768px){
    img {
      width: 48px;
      height: 48px;
    }
  }
`;

export const FormModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input:focus{
      border: 1px solid #FF7020;
  }

    button{
      margin-top: 24px;
      width: 180px;
      height: 40px;
    }

    @media screen and (min-width: 768px){
      input, button {
        width: 250px;
      }
  }
`;

export const ModalFooter = styled.div`
  color: black;
  font-size: 12px;

  span{
    color: #FF7020;
  }

  @media screen and (min-width: 768px){
    font-size: 14px;
  }
`;
