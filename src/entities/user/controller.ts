import instanceAPI from '../../service/api'
import { IUser } from './model'

export class UserController {
  async login (email: string) {
    try {
      const response = await instanceAPI.post<IUser>('user/login', { email });

      return response.data;
    } catch (error) {
      throw new Error("Não foi possível realizar o login!");
    }
  }
}