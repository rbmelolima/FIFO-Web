import React, { useEffect, useState } from 'react';
import { ButtonPrimary } from '../../styles/buttons';
import { Container, CircularStatus } from './styles';
import json from '../../utils/phrases.json';
import { getRandomInt } from '../../utils/getRandomInt';
import { IService } from '../../entities/services/model';
import { IStatusQueue } from '../../entities/queue/model';
import { useUser } from '../../entities/user/context';
import { queue } from '../../entities/queue';

type params = {
  service: IService | null;
  status: IStatusQueue[] | null
  entryQueueStatus: (entry: boolean) => void;
  cleanService: () => void;
}

const StatusQueue: React.FC<params> = ({ status, service, entryQueueStatus, cleanService }) => {
  const { user } = useUser();
  const [ position, setPosition ] = useState(0);

  useEffect(() => {
    status?.forEach((userInUsers) => {
      if (userInUsers.user.email === user.email) {
        setPosition(userInUsers.position);
      }
    })
  }, [ status, user ])

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

  async function handle () {
    await queue.exit(user.id);
    //Limpa o status service do componente pai
    cleanService();
    //Sinaliza que saiu da fila
    entryQueueStatus(false);
    document.location.reload();
  }

  return (
    <Container>
      <CircularStatus>
        <h3>
          { txtStatus() }
        </h3>
      </CircularStatus>

      <p>Você está aguardando na fila do(a) { service?.name }</p>

      {
        txtPhrases()
      }

      <ButtonPrimary onClick={ () => handle() }>
        { txtButton() }
      </ButtonPrimary>
    </Container>
  );
}

export default StatusQueue;