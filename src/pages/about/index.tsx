import React from 'react';
import * as styles from './styles';

import Logo from '../../assets/logo/LOGO.svg';
import { ButtonPrimary, ButtonSecondary } from '../../styles/buttons';
import Input from '../../components/UI/input/index';


const About: React.FC = () => {

    return (
        <>
            <styles.Navbar>
                <img src={Logo} alt="Fila" />
                <ButtonSecondary>
                    Como funciona
                </ButtonSecondary>
            </styles.Navbar>

            <styles.PageLogin>
                <styles.Main>

                </styles.Main>

            </styles.PageLogin>
        </>
    )
};

export default About;