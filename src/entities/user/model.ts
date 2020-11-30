export interface IUser {
  id: number
  name: string
  email: string
  cover: {
    id: number,
    url: string,
    category: string
  },
  last_socket_id: number
  localization_id: number
}

export class User {
  public readonly id: number
  public name: string
  public email: string
  public cover: {
    id: number,
    url: string,
    category: string
  }
  public last_socket_id: number
  public localization_id: number

  constructor (object: IUser) {
    this.id = object.id;
    this.name = object.name;
    this.email = object.email;
    this.cover = object.cover;
    this.last_socket_id = object.last_socket_id;
    this.localization_id = object.localization_id;
  }
}
