import React from 'react';
import CardQueue from '../cardQueue';
import { Container, Grid } from './styles';
import { baseUrl } from '../../service/api';
import { ILocalizationService } from '../../entities/localization/model';
import { IService } from '../../entities/services/model';

type params = {
  listServices: Array<ILocalizationService> | null;
  selected: IService | null;
  set: (service: IService) => void;
}

const GridQueue: React.FC<params> = ({ selected, set, listServices }) => {
  return (
    <Container style={ { display: selected === null ? 'block' : 'none' } }>
      <h5> Escolha o jogo e entre na fila</h5>
      <Grid>
        {
          listServices !== null && listServices.map((service, index) => {
            return (
              <CardQueue
                key={ index }
                name={ service.service.name }
                active={ selected?.id === service.id && true }
                url={ baseUrl + service.service.cover.url }
                click={ () => set(service.service) }
              />
            )
          })
        }
      </Grid>
    </Container>
  );
}

export default GridQueue;