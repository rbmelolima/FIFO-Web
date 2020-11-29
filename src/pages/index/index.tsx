import React from 'react';
import Logo from '../../assets/logo/logo.svg';
import { ButtonPrimary, ButtonSecondary } from '../../styles/buttons';
import Input from '../../components/UI/input/index';
import { Main, Navbar, PageLogin } from './styles';


const Index: React.FC = () => {
  return (
    <>
      <Navbar>
        <img src={ Logo } alt="Fila" />
        <ButtonSecondary>
          Como funciona
        </ButtonSecondary>
      </Navbar>

      <PageLogin>
        <Main>
          <h1>Gerencie sua diversão</h1>
          <p>
            O Fila virtual tem a capacidade de organizar e controlar sua posição de forma rápida e prática.
          </p>

          <h2>Vamos começar!</h2>

          <form action="">
            <Input
              placeholder="exemplo@exemplo.com"
              label="Email"              
            />
            <ButtonPrimary> Entrar </ButtonPrimary>
          </form>
        </Main>
      </PageLogin>
    </>
  )
};

export default Index;