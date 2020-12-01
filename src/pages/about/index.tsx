import React from 'react';
import * as styles from './styles';

import Logo from '../../assets/logo/logo.svg';
import doodleDesktop from '../../assets/doodles/doodle-desktop.svg';
import icons from '../../assets/about/icons.svg';
import fila from '../../assets/about/Fila.svg';
import status from '../../assets/about/Status.svg';

import { ButtonPrimary, ButtonSecondary } from '../../styles/buttons';
import Input from '../../components/UI/input/index';
import CardAbout from '../../components/cardAbout';


const About: React.FC = () => {

    return (
        <styles.Container>
            <styles.Navbar>
                <img src={Logo} alt="Fila" />
                <ButtonSecondary>
                    Como funciona
                </ButtonSecondary>
            </styles.Navbar>


            <styles.Main>
                <styles.Section>
                    <div className="container_section_elements_img">
                        <img src={doodleDesktop} alt="Gerencie sua diversão" />
                    </div>
                    <div className="container_section_elements">
                        <CardAbout side="container_right" title="Gerencie sua diversão" description="O Fila virtual tem a capacidade de organizar e controlar sua posição na fila de forma rápida e prática." />
                    </div>


                </styles.Section>
                <styles.Section>
                    <div className="container_section_elements">
                        <CardAbout side="container_left" title="Ambiente organizado para sua diversão" description="No Fila você encontra Serviços disponiveis para sua diversão da empresa de forma fácil em um só lugar." />
                    </div>
                    <div className="container_section_elements_img">
                        <img src={icons} alt="Ambiente organizado para sua diversão" />
                    </div>
                </styles.Section>
                <styles.Section>
                    <div className="container_section_elements_img">
                        <img src={fila} alt="Aqui é fácil de entrar na fila" />
                    </div>
                    <div className="container_section_elements">
                        <CardAbout side="container_right" title="Aqui é fácil de entrar na fila" description="Entre na fila das diversões,  aqui você consegue ver quantas pessoas tem em cada serviço podendo escolher a que está com a fila menor para se divertir mais rápido. " />
                    </div>
                </styles.Section>
                <styles.Section>
                    <div className="container_section_elements">
                        <CardAbout side="container_left" title="Sua notificação" description="Você consegue ver qual posição está atrávez do nosso relatório te informando quando chegar sua vez." />
                    </div>
                    <div className="container_section_elements_img">
                        <img src={status} alt="Sua notificação" />
                    </div>
                </styles.Section>
                <styles.FormIndex>
                    <h2>Vamos começar sua diversão?</h2>
                    <Input label="Email" name="email-input" />
                    <ButtonPrimary>
                        Entrar
                    </ButtonPrimary>

                </styles.FormIndex>

            </styles.Main>


        </styles.Container>
    )
};

export default About;