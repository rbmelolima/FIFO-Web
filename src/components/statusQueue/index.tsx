import React from 'react';
import { ButtonPrimary } from '../../styles/buttons';
import { Container, CircularStatus } from './styles';
import json from '../../utils/phrases.json';
import { getRandomInt } from '../../utils/getRandomInt';

type params = {
  position: number;
  game: number;
  entryQueueStatus: (entry: boolean) => void;
  cleanService: () => void;
}

const StatusQueue: React.FC<params> = ({ position, game, entryQueueStatus, cleanService }) => {
  function txtButton () {
    if (position === 0) return 'Confirmar';

    return 'Sair da fila';
  }

  function txtStatus () {
    if (position === 0) return 'Sua vez chegou!';

    return `${position}ª posição`;
  }

  function txtPhrases () {
    if (position !== 0) {
      const phrases = json.phrases;
      const phrase = phrases[ getRandomInt(0, phrases.length) ]

      return (
        <div className="reminder">
          <h4>Lembrete</h4>
          <p>
            "{ phrase }"
          </p>
        </div>
      )
    }
  }  

  function manager () {
    if (position === 0) {
      //Executar uma função

      //Limpa o status service do componente pai
      cleanService()
      //Sinaliza que saiu da fila
      entryQueueStatus(false);
    }

    else {
      //Limpa o status service do componente pai
      cleanService()
      //Sinaliza que saiu da fila
      entryQueueStatus(false);
    }
  }

  return (
    <Container>
      <CircularStatus>
        <h3>
          { txtStatus() }
        </h3>
      </CircularStatus>

      <p>Você está aguardando na fila do(a) { game }</p>

      {
        txtPhrases()
      }

      <ButtonPrimary onClick={ () => manager() }>
        { txtButton() }
      </ButtonPrimary>
    </Container>
  );
}

export default StatusQueue;