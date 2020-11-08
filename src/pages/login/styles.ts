import styled from 'styled-components';

import doodleMobile from '../../assets/doodles/doodle-mobile.svg';
import doodleDesktop from '../../assets/doodles/doodle-desktop.svg';

export const PageLogin = styled.div`
  background-image: url('${doodleMobile}');
  background-position: center top;
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: var(--color-background-dark);

  @media screen and (min-width: 1200px) {  
    background-image: url('${doodleDesktop}');
    background-position: center -500px;
    background-size: 100%;
    background-repeat: no-repeat;  
  }

  .container {
    background-color: var(--color-background-dark);
    width: fit-content;
    margin: 0 auto;
  }  

  @media screen and (min-width: 768px) {
    .container {
      max-width: 600px;
    }

    input {
      width: 450px;
      padding: 16px 24px;
      height: 54px;
    }

    button.entry {
      width: 300px;
      padding: 16px 24px;
      height: 54px;
    }
  }

  @media screen and (min-width: 992px) {
    .container {
      max-width: 650px;
    }

    input {
      width: 500px;
      padding: 16px 24px;
      height: 54px;
    }

    button.entry {
      width: 350px;
      padding: 16px 24px;
      height: 54px;
    }
  }
`;

export const Main = styled.main`  
  width: 100%;
  height: 100vh;
  padding: 32px 16px;
  text-align: center;  
  
  @media screen and (min-width: 768px) {
    .container {
      max-width: 600px;
    }

    input {
      width: 450px;
      padding: 16px 24px;
      height: 54px;
    }

    button.entry {
      width: 300px;
      padding: 16px 24px;
      height: 54px;
    }
  }

  @media screen and (min-width: 992px) {
    .container {
      max-width: 650px;
    }

    input {
      width: 500px;
      padding: 16px 24px;
      height: 54px;
    }

    button.entry {
      width: 350px;
      padding: 16px 24px;
      height: 54px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  background: linear-gradient(180deg, #f48c67 0%, #f49254 36.98%, #f59c33 100%);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  margin-bottom: 0.8rem;

  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }

  @media screen and (min-width: 992px) {
    font-size: 4rem;
  }
  

`;

export const Description = styled.p`
  color: var(--color-primary-light);
  font-size: 1rem;
  max-width: 350px;
  margin: 0 auto;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
    max-width: 100%;
    margin-bottom: 48px;
  }

  @media screen and (min-width: 992px) {
    font-size: 2rem;
    max-width: 100%;
    margin-bottom: 64px;
  }

`;

export const CTA = styled.h4`
  color: var(--color-primary-light);  
  font-size: 1rem;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 992px) {
    font-size: 2rem;
    margin-bottom: 48px;
  }

`;

export const Navbar = styled.nav`
  width: 100%;
  padding: 16px;
  background-color: transparent;

  display: flex;
  align-items: center;

  img {
    width: 90px;
  }
  
  @media screen and (min-width: 576px) {
    padding: 24px;
  }

  @media screen and (min-width: 768px) {
    padding: 32px;
  }

  @media screen and (min-width: 992px) {
    padding: 40px;
  }
`;

export const Form = styled.form`
  /* Gambiarra para setar um border-radius com gradiente */
  .gradient-box-input {
    padding: 3px;
    border-radius: 10px;
    background: linear-gradient(
      180deg,
      #f4994d 0%,
      #f4994d 0.01%,
      rgba(244, 153, 77, 0.307222) 99.98%,
      rgba(244, 153, 77, 0) 99.99%,
      #786247 100%
    );
    width: min-content;
    margin: 0 auto;
  }

  input {
    width: 220px;
    padding: 8px 12px;
    outline: none;
    border: none;
    border-radius: 10px;
    background-color: var(--color-background-dark);
  }

  input::placeholder,
  input {
    color: #fff;
    font-size: 1rem;
  }

  .gradient-box-button {
    padding: 4.5px;
    border-radius: 10px;
    background: linear-gradient(
      180deg,
      #f4994d 0%,
      rgba(241, 113, 6, 0) 63.54%,
      #786247 99.97%,
      rgba(244, 153, 77, 0.307222) 99.98%
    );
    width: min-content;
    margin: 0 auto;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    margin-top: 16px;
  }

  button {
    background-color: var(--color-background-dark);
    width: 168px;
    padding: 4px 12px;
    color: #fff;
    font-size: 1.2rem;
    border-radius: 10px;
    outline: none;
    border: none;
  }

  .entry-img {
    margin-top: 8px;
  }

  @media screen and (min-width: 768px) {
    input {
      width: 450px;
      padding: 16px 24px;
      height: 54px;
    }

    button {
      width: 300px;
      padding: 16px 24px;
      height: 54px;
    }
  }

  @media screen and (min-width: 992px) {
    input {
      width: 500px;
      padding: 16px 24px;
      height: 54px;
    }

    button {
      width: 350px;
      padding: 16px 24px;
      height: 54px;
    }
  }

`;