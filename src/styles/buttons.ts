import styled from 'styled-components';

export const ButtonSecondary = styled.button`
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  background-color: var(--color-secundary);
  outline: none;
  border: none;
  border-radius: 10px;
  transition: all 0.2s ease-in;

  &:hover, &active {
    background-color: #262569;
    color: #212121;
  }

  @media screen and (min-width: 748px) {
    font-size: 20px;
  }
`;

export const ButtonPrimary = styled.button`
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  background-color: var(--color-primary);
  outline: none;
  border: none;
  border-radius: 10px;
  transition: all 0.2s ease-in;

  &:hover, &active {
    background-color: #FF4F0E;
  }

  @media screen and (min-width: 748px) {
    font-size: 20px;
  }
`;

