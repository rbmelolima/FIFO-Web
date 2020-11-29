import styled from 'styled-components';
import doodleDesktop from '../../assets/doodles/doodle-desktop.svg';
import { InputMaterial } from '../../components/UI/input/styles';

export const PageLogin = styled.div`
  background-image: url('${doodleDesktop}');
  background-position: left bottom;
  background-repeat: no-repeat;
  background-color: var(--color-background);
  background-size: contain;
  background-size: 420px;    
  
  padding: 64px 32px; 
  width: 100%;
  min-height: 120vh;

  @media screen and (min-height: 800px) {
    min-height: 90vh;
  }   

  @media screen and (min-width: 1200px){
    background-size: 60%;
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
  max-width: 420px;
  width: 100%;

  @media screen and (min-width: 748px){
    max-width: 900px;
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

  ${InputMaterial} {
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
