import { emptyUser } from './helper';
import { IUser } from './model';

export class UserWebStorage {
  clean () {
    localStorage.removeItem('user');
  }

  get (): IUser {
    const userlocalStorage = localStorage.getItem('user');

    if (userlocalStorage !== null) {
      return JSON.parse(userlocalStorage);
    }

    return emptyUser();
  }

  set (user: IUser) {
    this.clean();
    const parsed = JSON.stringify(user);
    localStorage.setItem('user', parsed);
  }
}
