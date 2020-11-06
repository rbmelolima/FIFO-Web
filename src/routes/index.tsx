import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import UserProvider from '../context/userContext';

import Login from '../pages/login';
import Register from '../pages/register';
import { GlobalStyle } from '../styles/global';

export default function Routes () {
  return (
    <UserProvider>
      <GlobalStyle />
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
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}