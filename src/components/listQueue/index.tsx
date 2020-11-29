import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { ButtonPrimary } from '../../styles/buttons';
import ListtileQueue from '../listtileQueue';
import { BtnBack, Container } from './styles';

type params = {
  service: string;
  onBack: () => void;
}

const ListQueue: React.FC<params> = ({ service, onBack }) => {
  return (
    <Container style={ { display: service !== '' ? 'block' : 'none' } }>
      <BtnBack onClick={ () => onBack() }>
        <FiArrowLeft size={ 32 } color={ '#fff' } />
      </BtnBack>

      <h2>Fila { service }</h2>

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

      <div className="center">
        <ButtonPrimary>
          Entrar na fila
        </ButtonPrimary>

        <button onClick={ () => onBack() } >
          Voltar
        </button>
      </div>

    </Container>
  );
}

export default ListQueue;