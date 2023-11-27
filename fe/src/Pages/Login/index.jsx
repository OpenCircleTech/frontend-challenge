import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import { Context } from "../../Context/AuthContext";

import Modal from "../../Components/Modal";

import { Container, Content } from "./style";
import Button from "../../button";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(Context);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [erroLogin, setErroLogin] = useState(false);

  async function handleLogin(email, password) {
    try {
      await login(email, password);
      navigate('/home');
    } catch (error) {
      return setErroLogin(true);
    }
  }

  function handleOpenModal() {
    setIsModalVisible(true);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
  }

  return (
    <Container>
      <Content>
        <Button onClick={handleOpenModal}>Login</Button>
        <Modal
          type="login"
          visible={isModalVisible}
          onClose={handleCloseModal}
          handleLoginModal={handleLogin}
          erroLoginModal={erroLogin}
        />
      </Content>
    </Container>
  )
}
