import React from 'react';
import { Container } from './styles';

interface props {
    title: string,
    description: string,
    side: string,
}

const CardAbout: React.FC<props> = ({ title, description, side }) => {
    return (
        <Container className={side}>

            <h2>{title}</h2>
            <p>{description}</p>


        </Container>
    );
}

export default CardAbout;