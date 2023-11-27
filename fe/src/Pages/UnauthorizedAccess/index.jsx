import { Container, Card, InfoCard } from "./style";
import { useNavigate } from "react-router-dom";

import Button from '../../button';
import error from '../../assets/vetores/401 Error Unauthorized-pana.svg'

export default function UnauthorizedAccess() {
  const navigate = useNavigate();

  function handleBack() {
    navigate('/');
  }

  return (
    <Container>
      <Card>
        <InfoCard>
          <h2>Ooops...</h2>
          <h4>Não autorizado</h4>
          <p>
            Você não está autorizado a acessar esta página, por favor realize o login pra acessar esta página
          </p>
          <Button onClick={handleBack}>voltar</Button>
        </InfoCard>
      </Card>
      <img src={error} alt="" />
    </Container>
  )
}
