import React, { createContext, useContext, useEffect, useState } from 'react';
import UserModel from '../models/userModel';
import userWebStorage from '../utils/webstorage/user';

interface UserProviderModel extends UserModel {
  setUser: (user: UserModel) => void;
}

const defaultUser: UserProviderModel = { id: NaN, name: '', email: '', setUser: () => { } };

const UserContext = createContext<UserProviderModel>(defaultUser);

const UserProvider: React.FC = ({ children }) => {
  const [ user, setUserHandle ] = useState<UserModel>(defaultUser);

  useEffect(() => {
    const userData = userWebStorage.get();
    if(!isNaN(userData.id) && userData !== undefined) setUserHandle(userData);
  }, []);

  function setUser(value: UserModel) {
    setUserHandle(value);
    userWebStorage.set(value);
  }

  return (
    <UserContext.Provider value={
      {
        email: user.email,
        id: user.id,
        name: user.name,
        setUser
      }
    }>
      { children }
    </UserContext.Provider>
  );
};

export function useUser() {
  const context = useContext(UserContext);

  if(!context) throw new Error("useUser must be used within a UserProvider.");

  const { email, id, name, setUser } = context;
  const user = { id, name, email };
  return { user, setUser };
}

export default UserProvider;
