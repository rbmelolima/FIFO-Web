import React, { createContext, useContext, useEffect, useState } from 'react';
import { userWebstorage } from '.';
import { IUser } from './model';

interface UserProviderModel extends IUser {
  setUser: (user: IUser) => void;
}

const defaultUser: UserProviderModel = {
  id: -1,
  name: '',
  email: '',
  cover: {
    id: -1,
    url: '',
    category: ''
  },
  last_socket_id: -1,
  localization_id: -1,
  setUser: () => { }

};

const UserContext = createContext<UserProviderModel>(defaultUser);

const UserProvider: React.FC = ({ children }) => {
  const [ user, setUserHandle ] = useState<IUser>(defaultUser);

  useEffect(() => {
    const userData = userWebstorage.get();
    if (!isNaN(userData.id) && userData !== undefined) setUserHandle(userData);
  }, []);

  function setUser (value: IUser) {
    setUserHandle(value);
    userWebstorage.set(value);
  }

  return (
    <UserContext.Provider value={
      {
        id: user.id,
        cover: user.cover,
        last_socket_id: user.last_socket_id,
        localization_id: user.localization_id,
        email: user.email,
        name: user.name,
        setUser
      }
    }>
      { children }
    </UserContext.Provider>
  );
};

export function useUser () {
  const context = useContext(UserContext);

  if (!context) throw new Error("useUser must be used within a UserProvider.");

  const { id, cover, email, last_socket_id, localization_id, name, setUser } = context;

  const user = { id, cover, email, last_socket_id, localization_id, name };

  return { user, setUser };
}

export default UserProvider;
