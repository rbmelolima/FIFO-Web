import { IUser, User } from './model'

function emptyUser (): IUser {
  return new User({
    id: -1,
    name: '',
    email: '',
    cover: {
      id: -1,
      category: '',
      url: ''
    },
    last_socket_id: -1,
    localization_id: -1
  })
}

export { emptyUser }