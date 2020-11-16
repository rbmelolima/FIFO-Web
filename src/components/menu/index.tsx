import React from 'react';
import AvatarNavbar from '../../components/avatar';

import { Container } from './styles';

const Menu: React.FC = () => {
    return <Container>
        <a href="javascript:void(0)" className="closebtn">&times;</a>
        <div className="menu-avatar">
            <AvatarNavbar
                name="Roger"
                url="https://avatars3.githubusercontent.com/u/48859060?s=460&u=123d876938f95e03eaadd31dbb079018fa374c77&v=4" />

        </div>
        <div className="menu-option menu-option-active-container">
            <a className="menu-option-active">Início</a>
        </div>
        <div className="menu-option">
            <a>Editar Perfil</a>
        </div>
        <div className="menu-option">
            <a>Adicionar Serviço</a>
        </div>




    </Container>;
}

export default Menu;