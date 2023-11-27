import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';


import {
  Overlay, Container, ContainerCloseModal,
  TitleModal, FormModal,
  ModalFooter, LogoModal
} from "./style";

import isEmailValid from '../../utils/isEmailValid';

import FormGroup from "../FormGroup";

import logo from '../../assets/vetores/logo.svg';
import eye from '../../assets/vetores/Eyes.svg'
import Button from "../../button";
import Input from "../../input";

export default function Modal({ type, visible, onClose, handleLoginModal, handleCreateAccountModal, erroLoginModal }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [show, setShow] = useState(false);

  function handleShowPassword() {
    setShow(!show);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      return setErrorEmail(true);
    }

    setErrorEmail(false);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);

    if (!event.target.value) {
      return setErrorPassword(true);
    }

    setErrorPassword(false);
  }

  function handleSubmit() {
    if (!email) {
      return setErrorEmail(true);
    }

    if (!password) {
      return setErrorPassword(true);
    }

    handleLoginModal(email, password);
  }

  function handleCreateAccount() {
    if (!email) {
      return setErrorEmail(true);
    }

    if (!password) {
      return setErrorPassword(true);
    }

    handleCreateAccountModal(email, password)
  }

  function handleLinkToCreate() {
    navigate('/createAccount');
  }

  function handleLinkToLogin() {
    navigate('/');
  }

  if (!visible) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Container>
        <ContainerCloseModal>
          <input type="button" onClick={onClose} />
        </ContainerCloseModal>
        <TitleModal>
          <LogoModal>
            <img src={logo} alt="" width={40} height={40} />
          </LogoModal>
          {type === 'login' ? (
            <h1>Bem vindo de volta</h1>
          ) : (
            <h1>Criar conta</h1>
          )}
          {type === 'login' ? (
            <p>Entre para continuar e explorar ao seu alcance</p>
          ) : (
            <p>Crie sua conta para começar a explorar ao seu alcance</p>
          )}
        </TitleModal>
        <FormModal>
          {type === 'login' ? (
            <>
              <FormGroup
                error={errorEmail}
                erroLogin={erroLoginModal}
              >
                <span>
                  E-mail:
                </span>
                <Input
                  type="email"
                  email
                  error={errorEmail}
                  errorLogin={erroLoginModal}
                  placeholder="seuemail@gmail.com"
                  onBlur={(event) => handleEmailChange(event)}
                />
              </FormGroup>
              <FormGroup
                error={errorPassword}
                erroLogin={erroLoginModal}
              >
                <div className="password-form-group">
                  <span>
                    Senha:
                  </span>
                  <label onClick={handleShowPassword}><img src={eye} alt="" /></label>
                </div>
                <Input
                  type={show ? "text" : "password"}
                  placeholder="Senha"
                  error={errorPassword}
                  errorLogin={erroLoginModal}
                  onChange={(event) => handlePasswordChange(event)}
                />
              </FormGroup>
              <Button onClick={handleSubmit}>Logar</Button>
            </>
          ) : (
            <>
              <FormGroup
                error={errorEmail}
              >
                <span>
                  E-mail:
                </span>
                <Input
                  type="email"
                  email
                  error={errorEmail}
                  placeholder="seuemail@gmail.com"
                  onBlur={(event) => handleEmailChange(event)}
                />
              </FormGroup>
              <FormGroup
                error={errorPassword}
              >
                <div className="password-form-group">
                  <span>
                    Senha:
                  </span>
                  <label onClick={handleShowPassword}><img src={eye} alt="" /></label>
                </div>
                <Input
                  type={show ? "text" : "password"}
                  placeholder="Senha"
                  error={errorPassword}
                  onChange={(event) => handlePasswordChange(event)}
                />
              </FormGroup>
              <Button onClick={handleCreateAccount}>Criar Conta</Button>
            </>
          )}
        </FormModal>
        <ModalFooter>
          {type === 'login' ? (
            <p>Não tem conta? <span onClick={handleLinkToCreate}>Cadastre-se</span></p>
          ) : (
            <p>Ja possui conta? <span onClick={handleLinkToLogin}>Entrar</span></p>
          )}
        </ModalFooter>
      </Container>
    </Overlay>,
    document.getElementById('modal-root')
  );
}

Modal.propTypes = {
  type: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  handleLoginModal: PropTypes.func,
  handleCreateAccountModal: PropTypes.func,
  erroLoginModal: PropTypes.bool
}
