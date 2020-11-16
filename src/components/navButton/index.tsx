import React, { useState } from 'react';
import ButtonMenu from '../../assets/icons/ButtonMenu.svg';





const NavButton: React.FC = () => {
    return <button id="btn-menu">
        <img src={ButtonMenu} alt="" />
    </button>
        ;
}

export default NavButton;