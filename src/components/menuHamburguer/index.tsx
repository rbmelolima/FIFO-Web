import React from 'react';
import { FiX } from 'react-icons/fi';
import { Container, Close, Relative } from './styles';

type params = {
  visible: boolean;
  onClose: () => void;
}

const MenuHamburguer: React.FC<params> = ({ onClose, visible, children }) => {
  return (
    <Container style={ { display: visible ? 'block' : 'none' } }>
      <Relative>
        <Close onClick={ onClose }>
          <FiX size={ 24 } />
        </Close>
      </Relative>

      {
        children
      }
    </Container>
  );
}

export default MenuHamburguer;