import React from 'react';
import * as styles from './styles';

import Logo from '../../assets/logo/logo.svg';
import { ButtonPrimary, ButtonSecondary } from '../../styles/buttons';
import Input from '../../components/UI/input/index';

const Login: React.FC = () => {

  return (
    <>
      <styles.Navbar>
        <img src={Logo} alt="Fila" />
        <ButtonSecondary>
          Como funciona
        </ButtonSecondary>
      </styles.Navbar>

      <styles.PageLogin>
        <styles.Main>
          <h1>  Gerencie sua diversão </h1>
          <p>
            O Fila virtual tem a capacidade de organizar e controlar sua posição de forma rápida e prática.
          </p>

          <h2>Vamos começar!</h2>

          <Input label="Email" name="email-input" />

          <ButtonPrimary>
            Entrar
          </ButtonPrimary>
        </styles.Main>

      </styles.PageLogin>
    </>
  )
};

export default Login;