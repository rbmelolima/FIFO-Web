import React from 'react';
import section_1 from '../../assets/about/section_1_index.svg';
import section_2 from '../../assets/about/section_2_index.svg';
import section_3 from '../../assets/about/section_3_index.svg';
import section_4 from '../../assets/about/section_4_index.svg';
import * as styles from './styles';
import Logo from '../../assets/logo/logo.svg';
import { ButtonPrimary, ButtonSecondary } from '../../styles/buttons';
import Input from '../../components/UI/input/index';




function About() {
    return (
        <>
            <styles.Navbar>
                <img src={Logo} alt="Fila" />
                <ButtonSecondary>
                    Como funciona
            </ButtonSecondary>
            </styles.Navbar>

            <styles.Main>
                <section>
                    <img src={section_1} alt="Gerencie sua diversão - O Fila virtual tem a capacidade de organizar e controlar sua posição na fila de forma rápida e prática." />
                </section>
                <section>
                    <img src={section_2} alt="Ambiente organizado para sua diversão - No Fila você encontra Serviços disponiveis para sua diversão da empresa de forma fácil em um só lugar." />
                </section>
                <section>
                    <img src={section_3} alt="Aqui é facil de entrar na fila - Entre na fila das diversões,  aqui você consegue ver quantas pessoas tem em cada serviço podendo escolher a que está com a fila menor para se divertir mais rápido." />
                </section>
                <section>
                    <img src={section_4} alt="Sua notificação - Você consegue ver qual posição está atrávez do nosso relatório te informando quando chegar sua vez." />
                </section>
                <section className="formIndex">
                    <h2>Vamos começar sua diversão?</h2>
                    <Input label="Email" name="email-input" />
                    <ButtonPrimary>
                        Entrar
                    </ButtonPrimary>
                </section>
            </styles.Main>
        </>
    );
}

export default About;
