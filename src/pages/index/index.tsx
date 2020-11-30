import React, { FormEvent, useState } from 'react';
import Logo from '../../assets/logo/logo.svg';
import IconBtnMenu from '../../assets/icons/ButtonMenu.svg';
import { ButtonMenu, ButtonPrimary, ButtonSecondary } from '../../styles/buttons';
import Input from '../../components/UI/input/index';
import { Main, PageLogin } from './styles';
import { useHistory } from 'react-router-dom';
import { BtnListTile, Separator, Welcome } from '../../components/menu/styles';
import Navbar from '../../components/navbar';
import Menu from '../../components/menu';
import { userController } from '../../entities/user';
import { useUser } from '../../entities/user/context';

const Index: React.FC = () => {
  const history = useHistory();
  const [ openMenu, setOpenMenu ] = useState(false);
  const [ email, setEmail ] = useState('');
  const { setUser } = useUser();

  async function handleLogin (event: FormEvent) {
    event.preventDefault();

    const user = await userController.login(email);
    setUser(user);

    history.push('/filas');
  }

  return (
    <React.Fragment>
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

      <Menu visible={ openMenu } onClose={ () => setOpenMenu(false) }>
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
      </Menu>

      <PageLogin>
        <Main>
          <h1>Gerencie sua diversão</h1>
          <p>
            O Fila virtual tem a capacidade de organizar e controlar sua posição de forma rápida e prática.
          </p>

          <h2>Vamos começar!</h2>

          <form onSubmit={handleLogin}>
            <Input
              placeholder="exemplo@exemplo.com"
              label="Email"
              value={ email }
              onChange={ (e) => setEmail(e.target.value) }
            />
            <ButtonPrimary type="submit"> Entrar </ButtonPrimary>
          </form>
        </Main>
      </PageLogin>
    </React.Fragment>
  )
};

export default Index;