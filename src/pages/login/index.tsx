import React from 'react';

import logo from '../../assets/logo/logo.svg';
import entry from '../../assets/icons/entry.svg';

import './style.css';

const Login: React.FC = () => {
  return (
    <div id="page-login">
      <nav className="menu">
        <img src={ logo } alt="logo" />
      </nav>

      <main>
        <h1>Gerencie sua diversão </h1>
        <p> O Fifo gestão de fila virtual tem a capacidade de organizar e controlar sua posição na fila de forma rápida e prática.</p>

        <form action="">
          <h4>Vamos começar</h4>

          <div className="gradient-box-input">
            <input type="text" placeholder="Email: " />
          </div>

          <div className="gradient-box-button">
            <button className="entry">Entrar</button>
          </div>

          <img src={ entry } alt="" className="entry-img"/>

        </form>
      </main>
    </div>
  )
};

export default Login;