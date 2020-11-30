import React, { useState } from 'react';
import { ButtonMenu } from '../../styles/buttons';
import * as Icons from '../../components/gridQueue/assets';
import AvatarNavbar from '../../components/avatar';
import Menu from '../../components/menu';
import { AvatarContainer, BtnListTile, Separator } from '../../components/menu/styles';
import Navbar from '../../components/navbar';
import GridQueue from '../../components/gridQueue';
import ListQueue from '../../components/listQueue';
import StatusQueue from '../../components/statusQueue';
import { Page, Functions } from './styles';
import Visible from '../../components/visible';

function Queues () {
  const [ menuIsShow, setMenu ] = useState(false);
  const [ selectService, setService ] = useState('');
  const [ entryQueue, setEntryQueue ] = useState<boolean>(false);

  return (
    <React.Fragment>
      <Navbar>
        <AvatarNavbar
          name="Roger"
          url="https://avatars3.githubusercontent.com/u/48859060?s=460&u=123d876938f95e03eaadd31dbb079018fa374c77&v=4"
        />

        <ButtonMenu onClick={ () => setMenu(true) }>
          <img src={ Icons.ButtonMenu } alt="" />
        </ButtonMenu>
      </Navbar>

      <Menu onClose={ () => setMenu(false) } visible={ menuIsShow }>
        <AvatarContainer>
          <AvatarNavbar
            name="Roger"
            url="https://avatars3.githubusercontent.com/u/48859060?s=460&u=123d876938f95e03eaadd31dbb079018fa374c77&v=4"
          />
        </AvatarContainer>
        <Separator />
        <BtnListTile>
          Início
        </BtnListTile>
        <Separator />
        <BtnListTile>
          Editar perfil
        </BtnListTile>
        <Separator />
        <BtnListTile>
          Adicionar serviço
        </BtnListTile>
        <Separator />
      </Menu>

      <Page>
        <main>
          <Functions>
            <button
              disabled={ entryQueue }
            >
              Diversão
            </button>

            <button
              disabled={ !entryQueue }
            >
              Minha fila
            </button>
          </Functions>

          <Visible isVisible={ !entryQueue }>
            <GridQueue
              set={ setService }
              selected={ selectService }
            />

            <ListQueue
              onBack={ () => setService('') }
              entryQueueStatus={ setEntryQueue }
              service={ selectService }
            />
          </Visible>

          <Visible isVisible={ entryQueue }>
            <StatusQueue
              entryQueueStatus={ setEntryQueue }
              cleanService={() => setService('')}
              position={ 0 }
              game={ selectService }
            />
          </Visible>

        </main>
      </Page>
    </React.Fragment>
  );
}

export default Queues;