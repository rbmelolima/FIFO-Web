import React from 'react';
import { IStatusQueue } from '../../entities/queue/model';
import { baseUrl } from '../../service/api';
import { Container, Divider, Gradiente } from './styles';

interface props {
  userInQueue: IStatusQueue
}

const ListtileQueue: React.FC<props> = ({ userInQueue }) => {
  const { position, user } = userInQueue;

  function txtName () {
    if (user.name === null || user.name === '') {
      const split = user.email.split('@');
      return split[ 0 ];
    }
    return user.name;
  }
  
  return (
    <>
      <Gradiente className={ position === 0 ? 'active' : '' }>
        <Container>
          <div>
            <span>{ position }</span>
            <img src={ baseUrl + user.cover.url } alt="" />
            <strong>{ txtName() }</strong>
          </div>

          { position === 0 && <span className="info"> Próximo </span> }
        </Container>
      </Gradiente>

      {
        position !== 0 && <Divider />
      }
    </>
  );
}



export default ListtileQueue;