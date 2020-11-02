import React from 'react';
import { useUser } from '../../context/userContext';
// import { Container } from './styles';

const Login: React.FC = () => {
  const { setUser } = useUser();

  return (
    <main>
      <p>Login</p>

      <button onClick={ () => setUser({ id: 15, email: "rbmelolima@gmail.com", name: "Roger Bernardo de Melo Lima" }) }>
        Login
      </button>
    </main>
  );
};

export default Login;