import styled, { css } from 'styled-components';

import arroba from './assets/vetores/arroba.svg';

export default styled.input`
  width: 180px;
  height: 40px;
  background: #FFF;
  border-radius: 6px;
  border: 1px solid #CDCDCD;
  outline: none;
  color: #FF7020;
  padding: 8px;

  ${({ email }) => email && css`
      background: url(${arroba});
      background-repeat: no-repeat;
      background-position: right;
      background-position-x: 97%;
      background-size: 1.5em;
  `}

  ${({ error }) => error && css`
    color: #C60202;
    border-color: #C60202 !important;
  `}

  ${({ errorLogin }) => errorLogin && css`
    color: #C60202;
    border-color: #C60202 !important;
  `}
`;
