import React from 'react';
import CardQueue from '../../components/cardQueue';
import * as Icons from './assets';
import { WrapperButton, PageChooseQueue, Grid, Main } from './styles';

const ChooseQueues: React.FC = () => {
  return (
    <PageChooseQueue>
      <Main>
        <h2 className="title-choice-button">Escolha a função</h2>
        <WrapperButton>

          <div className="div-wrapper-button">
            <div className="box-button active-box-button">
              <button>
                <h4>Serviços</h4>
              </button>
            </div>

            <div className="box-button">
              <button>
                <h4>Minha Fila</h4>
              </button>
            </div>

          </div>

        </WrapperButton>
        <h2>Entrar na fila</h2>
        <Grid>
          <CardQueue
            name="Xadrez"
            url={Icons.Xadrez}
            click={() => { }}
          />

          <CardQueue
            name="Breanking Bad"
            url={Icons.Breankingbad}
            click={() => { }}
          />

          <CardQueue
            name="Ping Pong"
            url={Icons.Pingpong}
            click={() => { }}
          />

          <CardQueue
            name="Resistence"
            url={Icons.Resistance}
            click={() => { }}
          />

          <CardQueue
            name="Sinuca"
            url={Icons.Sinuca}
            click={() => { }}
          />

          <CardQueue
            name="Uno"
            url={Icons.Uno}
            click={() => { }}
          />

          <CardQueue
            name="Playstation"
            url={Icons.Videogame}
            click={() => { }}
          />

          <CardQueue
            name="Massagem"
            url={Icons.Massagem}
            click={() => { }}
          />
        </Grid>
      </Main>

    </PageChooseQueue>
  );
}

export default ChooseQueues;