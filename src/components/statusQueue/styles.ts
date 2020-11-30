import styled from 'styled-components';
import circularBg from '../../assets/doodles/circular.svg'

export const Container = styled.div`
  max-width: 360px;
  margin: 0 auto;
  text-align: center;
  color: #fff;

  p {
    font-size: 18px;
  }

  button {
    margin-top: 32px;
    min-width: 200px;
  }

  .reminder {
    h4 {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      margin-top: 24px;  
      margin-bottom: 8px;  
      color: #FC703C;
    } 

    p {
      font-size: 16px;
      margin-bottom: 16px;
    }
  }
`;

export const CircularStatus = styled.div`
  width: 320px;
  height: 320px;
  margin: 0 auto;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('${circularBg}');
  background-position: center;
  background-repeat: no-repeat;  

  h3 {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    color: #fff;
    max-width: 240px;
  }

  @media screen and (max-width: 576px) {
    width: 300px;
    height: 300px;

    h3 {
      font-size: 32px;
    }
  }
`;