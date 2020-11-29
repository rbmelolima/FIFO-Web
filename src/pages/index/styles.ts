import styled from 'styled-components';
import doodleDesktop from '../../assets/doodles/doodle-desktop.svg';
import { InputMaterial } from '../../components/UI/input/styles';

export const PageLogin = styled.div`
  background-color: var(--color-background);   
  min-height: 90vh;
  height: 100%;
  padding: 64px 32px; 
  width: 100%;  

  @media screen and (min-width: 748px){
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url('${doodleDesktop}');
    background-position: left bottom;
    background-repeat: no-repeat;
    background-size: contain;
    background-size: 50%;
  }
  
  @media screen and (min-width: 1200px){
    background-size: 53%;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 420px;
  width: 100%;  

  h1 {
    background-image: linear-gradient(180deg, #FE662E 17.76%, #F59C33 62.55%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    text-align: center;    
  }

  h1 {
    font-size: 48px;
    margin-bottom: 16px;
    font-family: 'Metrophobic', sans-serif;
    font-weight: 400;
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

  ${InputMaterial} {
    max-width: 460px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  button {
    margin-top: 32px;
    max-width: 260px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 748px){
    max-width: 900px;
    margin-right: unset;
    margin-left: auto;

    h1 {
      font-size: 72px;
    }

    p {
      font-size: 18px;
    }
  }
`;

