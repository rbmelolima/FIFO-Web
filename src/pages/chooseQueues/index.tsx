import React from 'react';
import CardQueue from '../../components/cardQueue';
import * as Icons from './assets';
import { WrapperButton, PageChooseQueue, Grid, Main, TitleChoiceButton, Navigation } from './styles';
import AvatarNavbar from '../../components/avatarNavbar';

const ChooseQueues: React.FC = () => {
  return (
    <PageChooseQueue>
      <Navigation>
        <AvatarNavbar name="Roger" url="https://avatars3.githubusercontent.com/u/48859060?s=460&u=123d876938f95e03eaadd31dbb079018fa374c77&v=4"/>

        <div className="links">
          <a href="/">FC-Santos</a>
          <a href="/">FC-São Paulo</a>
        </div>

        <button>
          <img src={Icons.menu} alt=""/>
        </button>
      </Navigation>

      <Main>
        <TitleChoiceButton> Escolha a função </TitleChoiceButton>

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

        <div className="imgWrapperButton">
          <img src={ Icons.entry } alt="" />
        </div>

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

    </PageChooseQueue>
  );
}

export default ChooseQueues;