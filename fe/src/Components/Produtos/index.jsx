import { Container, Card } from "./style";
import { useNavigate } from "react-router-dom";

import Button from "../../button";

export default function Produtos() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem('token');
    navigate('/');
  }

  return(
    <Container>
      <Card>
        <h1>Produtos</h1>
        <Button onClick={handleLogout}>Deslogar</Button>
      </Card>
    </Container>
  );
}
