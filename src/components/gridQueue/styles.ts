import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 576px) {
    max-width: 80%;
  }

  @media screen and (min-width: 748px) {
    max-width: 60%;
  }

  @media screen and (min-width: 992px) {
    max-width: 50%;
  }
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  margin: 0 auto;
 
  h5 {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 24px;
    text-align: center;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap; 
  gap: 16px;
`;
