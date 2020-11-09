import React from 'react';
import CardQueue from '../../components/cardQueue';
<<<<<<< HEAD
import ChoiceButton from '../../components/choiceButton';

import PingPongIcon from '../../assets/icons/pingpong.svg';
//import { Container } from './styles';

const ChooseQueues: React.FC = () => {
  return (
    <div className="">



=======
import * as Icons from './assets';
import { PageChooseQueue, Grid, Main } from './styles';

const ChooseQueues: React.FC = () => {
  return (
    <PageChooseQueue>
      <Main>
        <h2>Entrar na fila</h2>

        <Grid>
          <CardQueue
            name="Xadrez"
            url={ Icons.Xadrez }
            click={ () => { } }
          />

          <CardQueue
            name="Breanking Bad"
            url={ Icons.Breankingbad }
            click={ () => { } }
          />

          <CardQueue
            name="Ping Pong"
            url={ Icons.Pingpong }
            click={ () => { } }
          />

          <CardQueue
            name="Resistence"
            url={ Icons.Resistance }
            click={ () => { } }
          />

          <CardQueue
            name="Sinuca"
            url={ Icons.Sinuca }
            click={ () => { } }
          />

          <CardQueue
            name="Uno"
            url={ Icons.Uno }
            click={ () => { } }
          />

          <CardQueue
            name="Playstation"
            url={ Icons.Videogame }
            click={ () => { } }
          />

          <CardQueue
            name="Massagem"
            url={ Icons.Massagem }
            click={ () => { } }
          />
        </Grid>
      </Main>
>>>>>>> 21dbc243824dae8836a01195e72a4cc2219874d7

    </PageChooseQueue>
  );
}

export default ChooseQueues;