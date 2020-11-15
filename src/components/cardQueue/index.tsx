import React from 'react';
import { Container, Gradiente } from './styles';

interface props {
  url: string,
  name: string,
  active?: boolean,
  click: () => void
}

const CardQueue: React.FC<props> = ({ url, name, click, active = false }) => {
  return (
    <Gradiente className={ active ? 'active' : '' }>
      <Container className={ active ? 'active' : 'default' } onClick={ () => click() } >
        <img src={ url } alt={ `fila-${name}` } />
        <span>{ name }</span>
      </Container>
    </Gradiente>
  );
}

export default CardQueue;