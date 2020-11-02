import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from '../pages/login';
import Register from '../pages/register';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"></Route>

        <Route path="/entrar">
          <Login />
        </Route>

        <Route path="/cadastrar">
          <Register />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}