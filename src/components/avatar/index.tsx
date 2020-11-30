import React, { useState } from 'react';
import { AvatarNavbarContainer, BtnOpen, GroupButtons } from './styles';
import { FiChevronDown } from 'react-icons/fi';
import { Popover } from '@material-ui/core';
import { Ilocalization } from '../../entities/localization/model';
import { useUser } from '../../entities/user/context';
import userIconDefault from '../../assets/icons/user.svg';

interface props {
  listLocalizations: Ilocalization[] | null;
  localizationSelected: Ilocalization | null;
  setLocalization: (value: Ilocalization) => void;
}

const AvatarNavbar: React.FC<props> = ({ listLocalizations, localizationSelected, setLocalization }) => {
  const { user } = useUser();
  const [ anchorEl, setAnchorEl ] = useState<any>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };  

  function txtName () {
    if (user.name === null || user.name === '') {
      const split = user.email.split('@');
      return split[ 0 ];
    }
    return user.name;
  }

  function urlImg () {
    if (user.cover === null) return userIconDefault;

    return user.cover.url;
  }

  return (
    <AvatarNavbarContainer>
      <img
        src={ urlImg() }
        alt="avatar"
        onError={ (event: React.SyntheticEvent<HTMLImageElement>) => {
          event.currentTarget.src = userIconDefault;
        } }
      />
      <div>
        <strong>{ 'Bem vindo, ' + txtName() }</strong>

        <BtnOpen
          aria-describedby={ open ? 'simple-popover' : undefined }
          onClick={ (event: React.MouseEvent) => setAnchorEl(event.currentTarget) }
        >
          { localizationSelected?.name } <FiChevronDown />
        </BtnOpen>

        <Popover
          id={ open ? 'simple-popover' : undefined }
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
            {
              listLocalizations?.map((value, index) => {                
                return (
                  <button key={ index } onClick={ () => setLocalization(value) }>
                    {
                      value.name
                    }
                  </button>
                );
              })
            }
          </GroupButtons>
        </Popover>
      </div>
    </AvatarNavbarContainer>
  );
}

export default AvatarNavbar;