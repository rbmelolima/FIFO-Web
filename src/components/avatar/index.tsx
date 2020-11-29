import React, { useState } from 'react';
import { AvatarNavbarContainer, BtnOpen, GroupButtons } from './styles';
import { FiChevronDown } from 'react-icons/fi';
import { Popover } from '@material-ui/core';

interface props {
  url: string,
  name: string
}

const AvatarNavbar: React.FC<props> = ({ url, name }) => {
  const [ anchorEl, setAnchorEl ] = useState<any>(null);
  const [ location, setlocation ] = useState('Santos');

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <AvatarNavbarContainer>
      <img src={ url } alt={ `avatar-${name}` } />
      <div>
        <strong>{ name }</strong>

        <BtnOpen
          aria-describedby={ id }
          onClick={ (event: React.MouseEvent) => setAnchorEl(event.currentTarget) }
        >
          { location } <FiChevronDown />
        </BtnOpen>

        <Popover
          id={ id }
          open={ open }
          anchorEl={ anchorEl }
          onClose={ handleClose }
          anchorOrigin={ {
            vertical: 'bottom',
            horizontal: 'center',
          } }
          transformOrigin={ {
            vertical: 'top',
            horizontal: 'center',
          } }
        >
          <GroupButtons>
            <button onClick={ () => setlocation('São Paulo') }> São Paulo</button>
            <button onClick={ () => setlocation('Santos') }> Santos</button>
          </GroupButtons>
        </Popover>
      </div>
    </AvatarNavbarContainer>
  );
}

export default AvatarNavbar;