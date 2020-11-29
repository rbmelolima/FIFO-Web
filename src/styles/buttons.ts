import styled, { css } from 'styled-components';

const Default = css`
  padding: 10px 12px;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  border: none;
  border-radius: 14px;
  transition: all 0.2s ease-in;

  @media screen and (min-width: 948px) {
    font-size: 20px;
  }
`;

export const ButtonMenu = styled.button`
  outline: none;
  border: none;    
  background-color: transparent;

  img {
    width: 32px;
  }
`;

export const ButtonSecondary = styled.button`
  ${ Default }
  color: #fff;
  background-color: var(--color-secundary);
  
  &:hover, &active {
    background-color: #262569;    
  }  
`;

export const ButtonPrimary = styled.button`
  ${ Default }
  padding: 12px 16px;
  color: #fff;
  background-color: var(--color-primary);

  &:hover, &active {
    background-color: #FF4F0E;
  } 
`;

