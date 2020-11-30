import styled from 'styled-components';
import doodle from '../../assets/doodles/doodle-queue-desktop.svg'

export const Page = styled.div`
  background-color: var(--color-background);
  width: 100%;
  min-height: 95vh;
  padding: 64px 16px;

  @media screen and (min-width: 748px) {
    background-image: url('${doodle}');
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 100%;
  }
`;

export const Functions = styled.div`
  padding-bottom: 32px;
  border-bottom: 1px solid #F4994D;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 40px;

  button {
    width: 50%;
    padding: 12px 16px;
    font-size: 24px;
    font-weight: bold;
    outline: none;
    border: none;
    border-radius: 14px;
    transition: all 0.2s ease-in;   

    color: #fff;
    background-color: var(--color-primary);

    &:hover, &active {
      background-color: #FF4F0E;
    } 
  }

  button:disabled {
    color: rgba(255, 255, 255, 0.2);
    background-color: transparent;

    &:hover, &active {
      background-color: initial;
    }
  }    
`;

