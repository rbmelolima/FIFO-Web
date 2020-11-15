import React from 'react';
import CardQueue from '../../components/cardQueue';
import * as Icons from './assets';
import * as styles from './styles';
import AvatarNavbar from '../../components/avatar';
import ListtileQueue from '../../components/listtileQueue';
import { ButtonPrimary } from '../../styles/buttons';

function Queues () {
  return (
    <>
      <styles.Navbar>
        <AvatarNavbar
          name="Roger"
          url="https://avatars3.githubusercontent.com/u/48859060?s=460&u=123d876938f95e03eaadd31dbb079018fa374c77&v=4" />

        <button id="btn-menu">
          <img src={ Icons.ButtonMenu } alt="" />
        </button>
      </styles.Navbar>

      <styles.Page>
        <styles.Main>
          <styles.ChooseQueue>
            <h5> Escolha o serviço e entre na fila</h5>
            <styles.Grid>
              <CardQueue
                name="Playstation"
                url={ Icons.Videogame }
                click={ () => { } } />

              <CardQueue
                name="Sinuca"
                url={ Icons.Sinuca }
                click={ () => { } } />

              <CardQueue
                name="Ping Pong"
                url={ Icons.Pingpong }
                click={ () => { } } />

              <CardQueue
                name="Xadrez"
                url={ Icons.Xadrez }
                click={ () => { } } />

              <CardQueue
                name="Breanking Bad"
                url={ Icons.Breankingbad }
                click={ () => { } } />

              <CardQueue
                name="Resistence"
                url={ Icons.Resistance }
                click={ () => { } } />

              <CardQueue
                name="Uno"
                url={ Icons.Uno }
                click={ () => { } } />

              <CardQueue
                name="Banco imobiliário"
                url={ Icons.BancoImobiliario }
                click={ () => { } } />

              <CardQueue
                name="Zumbie City"
                url={ Icons.Zumbie }
                click={ () => { } } />

              <CardQueue
                name="Detetive"
                url={ Icons.Detetive }
                click={ () => { } } />

              <CardQueue
                name="Massagem"
                url={ Icons.Massagem }
                click={ () => { } } />
            </styles.Grid>
          </styles.ChooseQueue>

          <styles.QueueStatus>
            <h2>Fila: Nome do jogo</h2>
            
            <ListtileQueue
              avatar="https://avatars3.githubusercontent.com/u/48859060?s=460&u=5ce755298e920f74f1f4ffc4ef5809ff1c56890d&v=4"
              name="rbmelolima"
              position={ 1 }
            />

            <ListtileQueue
              avatar="https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4"
              name="maykbrito"
              position={ 2 }
            />

            <ListtileQueue
              avatar="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4"
              name="diego3g"
              position={ 3 }
            />

            <ListtileQueue
              avatar="https://avatars3.githubusercontent.com/u/53866869?s=460&u=4aa9ab799d84d61fa14d646c318d65edc57e62e1&v=4"
              name="MatheusPalinkas"
              position={ 4 }
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