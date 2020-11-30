import React from 'react';
import { Container } from './styles';

interface props {
    title: string,
    description: string
}

const CardAbout: React.FC<props> = ({ title, description }) => {
    return (
        <Container>
            <h2>{title}</h2>
            <p>{description}</p>
        </Container>
    );
}

export default CardAbout;