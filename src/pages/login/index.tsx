import React, { FormEvent } from 'react';
import logo from '../../assets/logo/logo.svg';
import entry from '../../assets/icons/entry.svg';
import { CTA, Description, Form, Main, Navbar, PageLogin, Title } from './styles';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  let history = useHistory();

  function handleSubmit (event: FormEvent) {
    event.preventDefault();
    history.push('/filas');
  }

  return (
    <PageLogin>
      <Navbar>
        <img src={ logo } alt="logo" />
      </Navbar>

      <Main>
        <div className="container">
          <Title>Gerencie sua diversão </Title>
          <Description>
            O Fifo gestão de fila virtual tem a capacidade de organizar e controlar sua posição na fila de forma rápida e prática.
          </Description>

          <Form onSubmit={ handleSubmit }>
            <CTA>Vamos começar</CTA>

            <div className="gradient-box-input">
              <input type="text" placeholder="Email: " />
            </div>

            <div className="gradient-box-button">
              <button type="submit">Entrar</button>
            </div>

            <img src={ entry } alt="" className="entry-img" />
          </Form>
        </div>
      </Main>
    </PageLogin>
  )
};

export default Login;