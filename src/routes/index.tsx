import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Queues from '../pages/queues';
import Index from '../pages/index';
import UserProvider from '../entities/user/context';

export default function Routes () {
  return (
    <UserProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>

          <Route path="/filas">
            <Queues />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}