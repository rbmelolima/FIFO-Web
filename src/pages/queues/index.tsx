import React from 'react';
import CardQueue from '../../components/cardQueue';
import * as Icons from './assets';
import * as styles from './styles';
import AvatarNavbar from '../../components/avatar';

const Queues: React.FC = () => {
  return (
    <>
      <styles.Navbar>
        <AvatarNavbar
          name="Roger"
          url="https://avatars3.githubusercontent.com/u/48859060?s=460&u=123d876938f95e03eaadd31dbb079018fa374c77&v=4"
        />

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
                click={ () => { } }
              />

              <CardQueue
                name="Sinuca"
                url={ Icons.Sinuca }
                click={ () => { } }
              />

              <CardQueue
                name="Ping Pong"
                url={ Icons.Pingpong }
                click={ () => { } }
              />

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
                name="Resistence"
                url={ Icons.Resistance }
                click={ () => { } }
              />

              <CardQueue
                name="Uno"
                url={ Icons.Uno }
                click={ () => { } }
              />

              <CardQueue
                name="Banco imobiliário"
                url={ Icons.BancoImobiliario }
                click={ () => { } }
              />

              <CardQueue
                name="Zumbie City"
                url={ Icons.Zumbie }
                click={ () => { } }
              />

              <CardQueue
                name="Detetive"
                url={ Icons.Detetive }
                click={ () => { } }
              />

              <CardQueue
                name="Massagem"
                url={ Icons.Massagem }
                click={ () => { } }
              />
            </styles.Grid>
          </styles.ChooseQueue>

        </styles.Main>

      </styles.Page>
    </>
  );
}

export default Queues;