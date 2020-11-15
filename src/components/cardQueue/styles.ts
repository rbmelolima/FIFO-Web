import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  cursor: pointer;
  outline: none;
  border-radius: 10px;
  border: 2px solid var(--color-secundary); 

  
  width: 100%;
  padding: 12px;


  img {    
    margin-bottom: 12px;
    width: 64px;    
  }

  span {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    text-align: center;
    color: #FFFFFF;
  }

  @media screen and (min-width: 576px) {
    img {
      width: 100px;
    }
  }
`;
