import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserProvider from '../entities/user/context';

import Queues from '../pages/queues';
import Login from '../pages/login';
import Register from '../pages/register';

export default function Routes () {
  return (
    <UserProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>

          <Route path="/entrar">
            <Login />
          </Route>

          <Route path="/cadastrar">
            <Register />
          </Route>

          <Route path="/filas">
            <Queues />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}