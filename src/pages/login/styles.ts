import styled from 'styled-components';

import doodleDesktop from '../../assets/doodles/DOODLE-DESKTOP.svg';

export const PageLogin = styled.div`
  background-image: url('${doodleDesktop}');
  background-position: left bottom;
  background-repeat: no-repeat;
  background-color: var(--color-background);
  background-size: contain;
  
  padding: 32px;  
  width: 100%;
  min-height: 90vh;  

  @media screen and (min-width: 748px){
    background-size: 40%;
    display: flex;
    align-items: center;
    padding: 64px 32px;
  }

  @media screen and (min-width: 1200px){
    background-size: 50%;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  gap: 16px;
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-primary-light);

  img {
    width: 80px;
    height: auto;
  }


  @media screen and (min-width: 748px) {
    padding: 16px 32px;

    img {
      width: 100px;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 400px;
  width: 100%;

  @media screen and (min-width: 1200px){
    max-width: 800px;
    margin-right: unset;
    margin-left: auto;
  }

  h1 {
    background-image: linear-gradient(180deg, #FE662E 17.76%, #F59C33 62.55%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    font-size: 48px;
    text-align: center;
    margin-bottom: 16px;
  }

  p {
    text-align: center;
    color: #fff;
    font-size: 16px;
    margin-bottom: 32px;
  }

  h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #FE662E;
    margin-bottom: 16px;
  }

  input {
    margin-bottom: 16px;
    max-width: 460px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  button {
    max-width: 300px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1200px){
    h1 {
      font-size: 72px;
    }

    p {
      font-size: 18px;
    }
  }

`;

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

