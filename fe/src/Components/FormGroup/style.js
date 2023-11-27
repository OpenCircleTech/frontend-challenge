import styled from 'styled-components';

export const Container = styled.div`
  .form-item{
    display: flex;
    flex-direction: column;

    span {
      font-size: 12px;
      margin-bottom: 8px;
    }
  }

  .password-form-group{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2px;
  }

  & + &{
    margin-top: 16px;
  }

  small{
    display: block;
    margin-top: 8px;
    font-size: 12px;
    color: #C60202;
  }
`;
