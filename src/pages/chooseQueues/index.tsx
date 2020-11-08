import React from 'react';
import CardQueue from '../../components/cardQueue';
import * as Icons from './assets';
import { PageChooseQueue, Grid, Main } from './styles';

const ChooseQueues: React.FC = () => {
  return (
    <PageChooseQueue>
      <Main>
        <h2>Entrar na fila</h2>

        <Grid>
          <CardQueue name="Xadrez" url={ Icons.Xadrez } click={ () => { } } />
          <CardQueue name="Breanking Bad" url={ Icons.Breankingbad } click={ () => { } } />
          <CardQueue name="Ping Pong" url={ Icons.Pingpong } click={ () => { } } />
          <CardQueue name="Resistence" url={ Icons.Resistance } click={ () => { } } />
          <CardQueue name="Sinuca" url={ Icons.Sinuca } click={ () => { } } />
          <CardQueue name="Uno" url={ Icons.Uno } click={ () => { } } />
          <CardQueue name="Playstation" url={ Icons.Videogame } click={ () => { } } />
          <CardQueue name="Massagem" url={ Icons.Massagem } click={ () => { } } />
        </Grid>
      </Main>

    </PageChooseQueue>
  );
}

export default ChooseQueues;