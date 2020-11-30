import instanceAPI from '../../service/api';
import { IQueue, IStatusQueue } from './model';

type argumentsEntry = {
  localization: number,
  service: number,
  user: number
}

type argumentsList = {
  localization: number,
  service: number,
}

export class queueController {
  async entry (args: argumentsEntry) {
    try {
      const response = await instanceAPI.post<IQueue>('queue/entryQueue', args)
      return response.data
    } catch (error) {
      throw new Error("Não foi possível entrar na fila");
    }
  }

  async exit (idUser: number) {
    try {
      const response = await instanceAPI.post<IQueue>('queue/exitQueue', { id: idUser })
      return response.data
    } catch (error) {
      throw new Error("Não foi possível sair da fila");
    }
  }

  async list (args: argumentsList) {
    try {
      const response = await instanceAPI.post<IStatusQueue>('queue/statusQueue', args)
      return response.data
    } catch (error) {
      throw new Error("Não foi possível listar as pessoas que estão na fila");
    }
  }
}