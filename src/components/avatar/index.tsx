import React from 'react';
import { AvatarNavbarContainer } from './styles';
import { FiChevronDown } from 'react-icons/fi';

interface props {
  url: string,
  name: string
}

const AvatarNavbar: React.FC<props> = ({ url, name }) => {
  return (
    <AvatarNavbarContainer>
      <img src={url} alt={`avatar-${name}`} />
      <div>
        <strong>{`${name}`}</strong>
        <span>Filial de Santos <FiChevronDown size={16} color={'#FE662E'} /></span>
      </div>
    </AvatarNavbarContainer>
  );
}

export default AvatarNavbar;