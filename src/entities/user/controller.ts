import { IUser, User } from './model'

export class UserController {
  emptyUser (): IUser {
    return new User({
      id: -1,
      name: '',
      email: '',
      cover: '',
      last_socket_id: -1,
      localization_id: -1
    })
  }
}