import React from 'react';
import * as styles from './styles';

import Logo from '../../assets/logo/LOGO.svg';

const Login: React.FC = () => {

  return (
    <>
      <styles.Navbar>
        <img src={ Logo } alt="Fila" />
        <styles.ButtonSecondary>
          Como funciona
        </styles.ButtonSecondary>
      </styles.Navbar>

      <styles.PageLogin>
        <styles.Main>
          <h1>  Gerencie sua diversão </h1>
          <p>
            O Fila virtual tem a capacidade de organizar e controlar sua posição de forma rápida e prática.
          </p>

          <h2>Vamos começar!</h2>

          <input type="text" placeholder="email" />

          <styles.ButtonPrimary>
            Entrar
          </styles.ButtonPrimary>
        </styles.Main>

      </styles.PageLogin>
    </>
  )
};

export default Login;