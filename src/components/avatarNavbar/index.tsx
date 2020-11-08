import React from 'react';
import { Container } from './styles';

interface props {
  url: string,
  name: string
}

const AvatarNavbar: React.FC<props> = ({ url, name }) => {
  return (
    <Container>
      <img src={ url } alt={ `avatar-${name}` } />
      <h6>{ name }</h6>
    </Container>
  );
}

export default AvatarNavbar;