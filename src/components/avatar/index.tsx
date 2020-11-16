import React from 'react';
import { Container } from './styles';
import { FiChevronDown } from 'react-icons/fi';

interface props {
  url: string,
  name: string
}

const AvatarNavbar: React.FC<props> = ({ url, name }) => {
  return (
    <Container>
      <img src={url} alt={`avatar-${name}`} />
      <div>
        <strong>{`Bem vindo ${name}`}</strong>
        <span>Filial de Santos <FiChevronDown size={16} color={'#FE662E'} /></span>
      </div>
    </Container>
  );
}

export default AvatarNavbar;