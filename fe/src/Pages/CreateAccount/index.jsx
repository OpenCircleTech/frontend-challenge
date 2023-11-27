import { useNavigate } from "react-router-dom";

import Modal from "../../Components/Modal";
import UserService from "../../services/UserService";

export default function CreateAccount() {
  const navigate = useNavigate();

  function handleCloseModal() {
    navigate('/');
  }

  async function handleCreateAccount(email, password) {
    const user = {
      email,
      password
    }

    try {
      const { token } = await UserService.create(user);
      localStorage.setItem('token', token);
      navigate('/home');
    } catch (error) {
      return alert('Erro na API!');
    }
  }

  return (
      <Modal
        type="create"
        visible={true}
        onClose={handleCloseModal}
        handleCreateAccountModal={handleCreateAccount}
      />
  );
}
