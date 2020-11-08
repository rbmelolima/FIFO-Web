import React from 'react';

import { Container } from './styles';

interface props {
  url: string,
  name: string,
  click: () => void
}

const CardQueue: React.FC<props> = ({ url, name, click }) => {
  return (
    <Container onClick={ () => click() } >
      <img src={ url } alt={ `fila-${name}` } />
      <span>{ name }</span>
    </Container>
  )
}

export default CardQueue;