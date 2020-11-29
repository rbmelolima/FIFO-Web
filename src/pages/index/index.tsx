import React, { useState } from 'react';
import Logo from '../../assets/logo/logo.svg';
import IconBtnMenu from '../../assets/icons/ButtonMenu.svg';
import { ButtonMenu, ButtonPrimary, ButtonSecondary } from '../../styles/buttons';
import Input from '../../components/UI/input/index';
import { Main, Navbar, PageLogin } from './styles';
import { useHistory } from 'react-router-dom';
import MenuHamburguer from '../../components/menuHamburguer';
import { BtnListTile, Separator, Welcome } from '../../components/menuHamburguer/styles';

const Index: React.FC = () => {
  const history = useHistory();

  const [ openMenu, setOpenMenu ] = useState(false);

  return (
    <>
      <Navbar>
        <img src={ Logo } alt="Fila" className="logo" />

        <div className="group">
          <ButtonSecondary onClick={ () => history.push('/sobre') }>
            Como funciona
          </ButtonSecondary>

          <ButtonMenu onClick={ () => setOpenMenu(true) }>
            <img src={ IconBtnMenu } alt="" />
          </ButtonMenu>
        </div>
      </Navbar>

      <MenuHamburguer visible={ openMenu } onClose={ () => setOpenMenu(false) }>
        <Welcome>
          <h4>Bem vindo!</h4>
          <p>
            Para deixar nosso produto mais acessível, disponibilizamos a versão escura e a versão clara.
          </p>
        </Welcome>

        <Separator />
        <BtnListTile>
          Versão escura
        </BtnListTile>
        <Separator />
        <BtnListTile>
          Versão clara
        </BtnListTile>
        <Separator />
      </MenuHamburguer>

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