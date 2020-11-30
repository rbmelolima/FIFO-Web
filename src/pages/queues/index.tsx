import React, { useEffect, useState } from 'react';
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
import { localization } from '../../entities/localization';
import { Ilocalization, ILocalizationService } from '../../entities/localization/model';

function Queues () {
  //Display components
  const [ menuIsShow, setMenu ] = useState(false);
  const [ selectService, setService ] = useState(-1);
  const [ entryQueue, setEntryQueue ] = useState(false);

  //Queue information  
  const [ listServices, setListServices ] = useState<ILocalizationService[] | null>(null);
  const [ listLocatizations, setLocalizations ] = useState<Ilocalization[] | null>(null);
  const [ selectedLocalization, setSelectedLocalization ] = useState<Ilocalization | null>(null);

  async function handleLocalization () {
    const listLocals = await localization.list();
    setSelectedLocalization(listLocals[ 0 ]);
    setLocalizations(listLocals);
  }

  async function handleService (id: number) {
    const listServices = await localization.listServices(id);
    setListServices(listServices);
  }

  useEffect(() => {
    handleLocalization();
  }, [])

  useEffect(() => {
    if (selectedLocalization !== null) {
      console.log("Buscando lista de serviços")
      handleService(selectedLocalization.id);
    }

  }, [selectedLocalization])

  return (
    <React.Fragment>
      <Navbar>
        <AvatarNavbar
          listLocalizations={ listLocatizations }
          localizationSelected={ selectedLocalization }
          setLocalization={ setSelectedLocalization }
        />

        <ButtonMenu onClick={ () => setMenu(true) }>
          <img src={ Icons.ButtonMenu } alt="" />
        </ButtonMenu>
      </Navbar>

      <Menu onClose={ () => setMenu(false) } visible={ menuIsShow }>
        <AvatarContainer>
          <AvatarNavbar
            listLocalizations={ listLocatizations }
            localizationSelected={ selectedLocalization }
            setLocalization={ setSelectedLocalization }
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
              listServices={ listServices }
              set={ setService }
              selected={ selectService }
            />

            <ListQueue
              onBack={ () => setService(-1) }
              entryQueueStatus={ setEntryQueue }
              service={ selectService }
            />
          </Visible>

          <Visible isVisible={ entryQueue }>
            <StatusQueue
              entryQueueStatus={ setEntryQueue }
              cleanService={ () => setService(-1) }
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