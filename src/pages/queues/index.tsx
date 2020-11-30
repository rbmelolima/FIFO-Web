import React, { useEffect, useState } from 'react';
import { ButtonMenu } from '../../styles/buttons';
import BtnIconMenu from '../../assets/icons/ButtonMenu.svg';
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
import { IService } from '../../entities/services/model';
import { IStatusQueue } from '../../entities/queue/model';
import { queue } from '../../entities/queue';

function Queues () {
  //Display components
  const [ menuIsShow, setMenu ] = useState(false);
  const [ entryQueue, setEntryQueue ] = useState(false);

  //Queue information  
  const [ listServices, setListServices ] = useState<ILocalizationService[] | null>(null);
  const [ listLocatizations, setLocalizations ] = useState<Ilocalization[] | null>(null);
  const [ selectedLocalization, setSelectedLocalization ] = useState<Ilocalization | null>(null);
  const [ selectService, setService ] = useState<IService | null>(null);
  const [ usersInQueue, setUsersInQueue ] = useState<IStatusQueue[] | null>(null);

  async function handleLocalization () {
    const listLocals = await localization.list();
    setSelectedLocalization(listLocals[ 0 ]);
    setLocalizations(listLocals);
  }

  async function handleService (id: number) {
    const listServices = await localization.listServices(id);
    setListServices(listServices);
  }

  async function handleStatusQueue (idLocalization: number, idService: number) {
    const listUsers = await queue.list({
      localization: idLocalization,
      service: idService
    });

    setUsersInQueue(listUsers);
  }

  useEffect(() => {
    console.warn("Buscando lista de filiais")
    handleLocalization();
  }, []);

  useEffect(() => {
    if (selectedLocalization !== null) {
      console.warn("Buscando lista de serviços")
      handleService(selectedLocalization.id);
    }
  }, [ selectedLocalization ]);

  useEffect(() => {
    if (selectedLocalization !== null && selectService !== null) {
      console.warn("Buscando usuários de dentro de uma fila")
      handleStatusQueue(selectedLocalization.id, selectService.id)
    }
  }, [ selectedLocalization, selectService ]);

  return (
    <React.Fragment>
      <Navbar>
        <AvatarNavbar
          listLocalizations={ listLocatizations }
          localizationSelected={ selectedLocalization }
          setLocalization={ setSelectedLocalization }
        />

        <ButtonMenu onClick={ () => setMenu(true) }>
          <img src={ BtnIconMenu } alt="" />
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
              onBack={ () => setService(null) }
              entryQueueStatus={ setEntryQueue }
              service={ selectService }
              localization={selectedLocalization}
              usersInQueue={ usersInQueue }
            />
          </Visible>

          <Visible isVisible={ entryQueue }>
            <StatusQueue
              entryQueueStatus={ setEntryQueue }
              cleanService={ () => setService(null) }
              service={ selectService }
              status={ usersInQueue }

            />
          </Visible>

        </main>
      </Page>
    </React.Fragment>
  );
}

export default Queues;