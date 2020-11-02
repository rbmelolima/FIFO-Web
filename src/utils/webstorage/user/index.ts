import WebStorage from "..";
import UserModel from "../../../models/userModel";

class UserWebStorage implements WebStorage {
  clean(): void {
    sessionStorage.removeItem('user');
  }

  get(): UserModel {
    const userSessionStorage = sessionStorage.getItem('user');

    if(userSessionStorage !== null) {
      return JSON.parse(userSessionStorage);
    }

    return { id: NaN, name: '', email: '' };
  }

  set(user: UserModel): void {
    this.clean();
    const parsed = JSON.stringify(user);
    sessionStorage.setItem('user', parsed);
  }
}


const userWebStorage = new UserWebStorage();

export default userWebStorage;