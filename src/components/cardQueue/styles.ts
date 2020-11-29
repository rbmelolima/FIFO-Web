import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background);
  outline: none;
  border-radius: 10px;
  border: 2px solid transparent;
  
  &.default {
    border-color: var(--color-secundary);
  }
  
  width: 100%;
  height: 100%;
  padding: 12px 25px 12px 25px;

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

export const Gradiente = styled.div`
  &.active {
    background-image: linear-gradient(180deg, #A8A8D0 0%, #FE662E 100%);    
  } 

  border-radius: 10px;
  max-width: 100%;
  padding: 2px;
`;
