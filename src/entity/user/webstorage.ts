import { userController } from '.';
import { IUser } from './model';

export class UserWebStorage {
  clean () {
    sessionStorage.removeItem('user');
  }

  get (): IUser {
    const userSessionStorage = sessionStorage.getItem('user');

    if (userSessionStorage !== null) {
      return JSON.parse(userSessionStorage);
    }

    return userController.emptyUser();
  }

  set (user: IUser) {
    this.clean();
    const parsed = JSON.stringify(user);
    sessionStorage.setItem('user', parsed);
  }
}
