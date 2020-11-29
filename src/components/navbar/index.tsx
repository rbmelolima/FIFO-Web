import React from 'react';

import { Container } from './styles';

const Navbar: React.FC = ({children}) => {
  return (
    <Container>
      {
        children
      }
    </Container>
  );
}

export default Navbar;