import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;

  img{
    width: 250px;
    height: 250px;
  }

  @media screen and (min-width: 768px){
    flex-direction: row;

    img{
      width: 300px;
      height: 300px;
    }
  }

  @media screen and (min-width: 1024px){
    img{
      width: 400px;
      height: 400px;
    }
  }

  @media screen and (min-width: 1024px){
    img{
      width: 500px;
      height: 500px;
    }
  }
`;

export const Card = styled.div`
  width: 250px;
  height: 275px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px){
    width: 350px;
    height: 375px;
  }

  @media screen and (min-width: 1024px){
    width: 450px;
    height: 475px;
  }

  @media screen and (min-width: 1440px){
    width: 550px;
    height: 575px;
  }
`;

export const InfoCard = styled.div`
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p{
      margin: 20px 0px;
      font-size: 12px;
    }

    button{
      width: 100px;
      height: 30px;
      font-size: 12px;
    }

    @media screen and (min-width: 768px){
     font-size: 24px;

     p {
      font-size: 14px;
     }

     button {
      width: 140px;
      height: 35px;
     }
  }

  @media screen and (min-width: 1024px){
     font-size: 28px;

     p {
      font-size: 18px;
     }

     button {
      width: 200px;
      height: 45px;
      font-size: 16px;
     }
  }

  @media screen and (min-width: 1024px){
     font-size: 32px;

     p {
      font-size: 18px;
      margin: 35px 0px;
     }

     button {
      width: 225px;
      height: 55px;
      font-size: 22px;
     }
  }
`;
