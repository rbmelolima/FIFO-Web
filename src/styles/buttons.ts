import styled, { css } from 'styled-components';

const Default = css`
  padding: 14px 12px;
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
  color: #fff;
  background-color: var(--color-primary);

  &:hover, &active {
    background-color: #FF4F0E;
  } 
`;

