import React from 'react';
import CardQueue from '../cardQueue';
import { Container, Grid } from './styles';
import * as Icons from './assets';

type params = {
  selected: string;
  set: (service: string) => void;
}

const GridQueue: React.FC<params> = ({ selected, set }) => {
  return (
    <Container style={ { display: selected === '' ? 'block' : 'none' } }>
      <h5> Escolha o serviço e entre na fila</h5>
      <Grid>
        <CardQueue
          name="Playstation"
          active={ selected === 'Playstation' && true }
          url={ Icons.Videogame }
          click={ () => {
            set('Playstation');            
          } }
        />
        <CardQueue
          name="Sinuca"
          active={ selected === 'Sinuca' && true }
          url={ Icons.Sinuca }
          click={ () => {
            set('Sinuca');           
          } }
        />
        <CardQueue
          name="Ping Pong"
          active={ selected === 'Ping Pong' && true }
          url={ Icons.Pingpong }
          click={ () => {
            set('Ping Pong');            
          } }
        />
        <CardQueue
          name="Xadrez"
          active={ selected === 'Xadrez' && true }
          url={ Icons.Xadrez }
          click={ () => {
            set('Xadrez');            
          } }
        />
        <CardQueue
          name="Breanking Bad"
          active={ selected === 'Breanking Bad' && true }
          url={ Icons.Breankingbad }
          click={ () => {
            set('Breanking Bad');            
          } }
        />
        <CardQueue
          name="Resistence"
          active={ selected === 'Resistence' && true }
          url={ Icons.Resistance }
          click={ () => {
            set('Resistence');            
          } }
        />
        <CardQueue
          name="Uno"
          active={ selected === 'Uno' && true }
          url={ Icons.Uno }
          click={ () => {
            set('Uno');            
          } }
        />

        <CardQueue
          name="Zumbie City"
          active={ selected === 'Zumbie City' && true }
          url={ Icons.Zumbie }
          click={ () => {
            set('Zumbie City');            
          } }
        />
        <CardQueue
          name="Detetive"
          active={ selected === 'Detetive' && true }
          url={ Icons.Detetive }
          click={ () => {
            set('Detetive');            
          } }
        />
        <CardQueue
          name="Massagem"
          active={ selected === 'Massagem' && true }
          url={ Icons.Massagem }
          click={ () => {
            set('Massagem');            
          } }
        />
      </Grid>
    </Container>
  );
}

export default GridQueue;