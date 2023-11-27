import PropTypes from 'prop-types';

import { Container } from './style';

export default function FormGroup({ children, error, erroLogin }) {
  return (
    <Container>
      <div className="form-item">
        {children}
      </div>
      {error && <small>Campo está inválido.</small>}
      {erroLogin && <small>Credenciais inválidas.</small>}
    </Container>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.bool,
  erroLogin: PropTypes.bool
};

FormGroup.defaultProps = {
  error: null,
};
