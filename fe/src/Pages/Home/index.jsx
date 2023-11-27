import { useNavigate } from 'react-router-dom'

import { Container, Card, ContainerCard, ContainerClose } from "./style";

import Button from '../../button';

import success from '../../assets/vetores/success.svg';

export default function Home() {
  let navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('token');
    navigate('/');
  }

  function handleButtonProducts() {
    navigate('/products')
  }

  return (
    <Container>
      <Card>
        <ContainerClose>
          <input type="button" onClick={handleLogout} />
        </ContainerClose>
        <ContainerCard>
          <h1>Login realizado com sucesso!</h1>
          <img src={success} alt="" />
          <Button onClick={handleButtonProducts}>Ver Produtos</Button>
        </ContainerCard>
      </Card>
    </Container>
  )
}
