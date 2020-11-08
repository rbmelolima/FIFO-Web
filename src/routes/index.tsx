import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import UserProvider from '../context/userContext';

import Login from '../pages/login';
import Register from '../pages/register';
import ChooseQueues from '../pages/chooseQueues';

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
            <ChooseQueues />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}