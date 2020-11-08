import React from 'react';

import { Container } from './styles';

interface props {
    url: string,
    name: string,

}

const CardQueue: React.FC<props> = ({ url, name }) => {
    return (
        <Container>
            <img src={url} alt={`fila-${name}`} />
            <span>{name}</span>
        </Container>

    )
}

export default CardQueue;