import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserProvider from '../entities/user/context';

import Queues from '../pages/queues';
import Index from '../pages/index';

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