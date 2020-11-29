import styled from 'styled-components';
import { ButtonPrimary } from '../../styles/buttons';

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

  h2 {
    font-size: 24px;
    text-align: center;
    color: #fff;
    font-weight: 500;
    margin-bottom: 24px;
  }

  footer {
    font-size: 16px;
    font-weight: 500;
    color: var(--color-primary);
    margin-top: 16px;
    margin-bottom: 40px;
    text-align: center;
  }

  .center {
    width: 100%;    
    text-align: center;  
  }

  ${ButtonPrimary}{
    width: 260px;
  }
`;

export const BtnBack = styled.button`
  outline: none;
  border: none;
  background-color: transparent;

  svg {
    color: #212121;
  }
`;
