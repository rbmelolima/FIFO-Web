import React from 'react';
import { Main, Title, Description, Subtitle } from './styles';

const Login: React.FC = () => {
  return (
    <Main>
      <Title>Gerencie sua diversão</Title>
      
      <Description>
        O Fifogame gestão de fila virtual tem a capacidade de organizar e controlar sua posição na fila de forma rápida e prática.
      </Description>

      <form action="">
        <Subtitle>Vamos começar</Subtitle>
      </form>
    </Main>
  );
};

export default Login;