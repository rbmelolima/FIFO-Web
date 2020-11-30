import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Ilocalization } from '../../entities/localization/model';
import { queue } from '../../entities/queue';
import { IStatusQueue } from '../../entities/queue/model';
import { IService } from '../../entities/services/model';
import { useUser } from '../../entities/user/context';
import { ButtonPrimary } from '../../styles/buttons';
import ListtileQueue from '../listtileQueue';
import { BtnBack, Container } from './styles';

type params = {
  localization: Ilocalization | null;
  service: IService | null;
  usersInQueue: IStatusQueue[] | null;
  onBack: () => void;
  entryQueueStatus: (entry: boolean) => void
}

const ListQueue: React.FC<params> = ({ localization, service, onBack, entryQueueStatus, usersInQueue }) => {
  const { user } = useUser();

  async function handleEntryQueue () {
    if (localization !== null && service !== null) {
      queue.entry({
        user: user.id,
        localization: localization?.id,
        service: service?.id
      });

      //Sinaliza que entrou na fila
      entryQueueStatus(true);
    }
  }

  return (
    <Container style={ { display: service !== null ? 'block' : 'none' } }>
      <BtnBack onClick={ () => onBack() }>
        <FiArrowLeft size={ 32 } color={ '#fff' } />
      </BtnBack>

      <h2>Fila { service?.name }</h2>

      {
        usersInQueue?.map((value) => {
          console.log(value)
          return (
            <ListtileQueue
              key={ value.entry_queue }
              userInQueue={ value }
            />
          )
        })
      }

      <footer>Tem { usersInQueue !== null && usersInQueue.length } pessoas na fila</footer>

      <div className="center">
        <ButtonPrimary onClick={ () => handleEntryQueue() }>
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