import React, { useState } from 'react';
import CardQueue from '../../components/cardQueue';
import * as Icons from './assets';
import * as styles from './styles';

import ListtileQueue from '../../components/listtileQueue';
import { ButtonPrimary } from '../../styles/buttons';
import Menu from '../../components/menu';

function Queues() {
  const [selected, setSelected] = useState<String>('');

  return (
    <>
      <styles.Navbar>

        <button id="btn-menu">
          <img src={Icons.ButtonMenu} alt="" />
        </button>

      </styles.Navbar>
      <Menu />
      <styles.Page>
        <styles.Main>

          <styles.ChooseQueue>
            <h5> Escolha o serviço e entre na fila</h5>
            <styles.Grid>
              <CardQueue
                name="Playstation"
                active={selected === 'Playstation' && true}
                url={Icons.Videogame}
                click={() => {
                  setSelected('Playstation');
                }}
              />
              <CardQueue
                name="Sinuca"
                active={selected === 'Sinuca' && true}
                url={Icons.Sinuca}
                click={() => {
                  setSelected('Sinuca');
                }}
              />
              <CardQueue
                name="Ping Pong"
                active={selected === 'Ping Pong' && true}
                url={Icons.Pingpong}
                click={() => {
                  setSelected('Ping Pong');
                }}
              />
              <CardQueue
                name="Xadrez"
                active={selected === 'Xadrez' && true}
                url={Icons.Xadrez}
                click={() => {
                  setSelected('Xadrez');
                }}
              />
              <CardQueue
                name="Breanking Bad"
                active={selected === 'Breanking Bad' && true}
                url={Icons.Breankingbad}
                click={() => {
                  setSelected('Breanking Bad');
                }}
              />
              <CardQueue
                name="Resistence"
                active={selected === 'Resistence' && true}
                url={Icons.Resistance}
                click={() => {
                  setSelected('Resistence');
                }}
              />
              <CardQueue
                name="Uno"
                active={selected === 'Uno' && true}
                url={Icons.Uno}
                click={() => {
                  setSelected('Uno');
                }}
              />
              <CardQueue
                name="Banco imobiliário"
                active={selected === 'Banco imobiliário' && true}
                url={Icons.BancoImobiliario}
                click={() => {
                  setSelected('Banco imobiliário');
                }}
              />
              <CardQueue
                name="Zumbie City"
                active={selected === 'Zumbie City' && true}
                url={Icons.Zumbie}
                click={() => {
                  setSelected('Zumbie City');
                }}
              />
              <CardQueue
                name="Detetive"
                active={selected === 'Detetive' && true}
                url={Icons.Detetive}
                click={() => {
                  setSelected('Detetive');
                }}
              />
              <CardQueue
                name="Massagem"
                active={selected === 'Massagem' && true}
                url={Icons.Massagem}
                click={() => {
                  setSelected('Massagem');
                }}
              />
            </styles.Grid>
          </styles.ChooseQueue>

          <styles.QueueStatus>
            <h2>Fila: {selected}</h2>

            <ListtileQueue
              avatar="https://avatars3.githubusercontent.com/u/48859060?s=460&u=5ce755298e920f74f1f4ffc4ef5809ff1c56890d&v=4"
              name="rbmelolima"
              position={1}
            />

            <ListtileQueue
              avatar="https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4"
              name="maykbrito"
              position={2}
            />

            <ListtileQueue
              avatar="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4"
              name="diego3g"
              position={3}
            />

            <ListtileQueue
              avatar="https://avatars3.githubusercontent.com/u/53866869?s=460&u=4aa9ab799d84d61fa14d646c318d65edc57e62e1&v=4"
              name="MatheusPalinkas"
              position={4}
            />

            <footer>Tem n pessoas na fila</footer>

            <ButtonPrimary>
              Entrar na fila
            </ButtonPrimary>
          </styles.QueueStatus>

        </styles.Main>
      </styles.Page>
    </>
  );
}

export default Queues;