import React from 'react';
import UserProvider, { useUser } from '../../context/userContext';
// import { Container } from './styles';

const Register: React.FC = () => {

  const { user } = useUser();

  return (
    <UserProvider>
      <main>
        <p>Mostrar dados</p>
        <p>{ user.id.toString() }</p>
        <p>{ user.email }</p>
        <p>{ user.name }</p>
      </main>
    </UserProvider>
  );
};

export default Register;