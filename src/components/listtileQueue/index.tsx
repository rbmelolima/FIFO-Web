import React from 'react';

import { Container, Divider, Gradiente } from './styles';

interface props {
  position: number;
  avatar: string;
  name: string;
}

function ListtileQueue (props: props) {
  const { avatar, name, position } = props

  return (
    <>
      <Gradiente className={ position === 1 ? 'active' : '' }>
        <Container>
          <div>
            <span>{ position }</span>
            <img src={ avatar } alt="" />
            <strong>{ name }</strong>
          </div>

          { position === 1 && <span className="info">Próximo</span> }
        </Container>
      </Gradiente>

      {
        position !== 1 && <Divider />
      }
    </>
  );
}

export default ListtileQueue;