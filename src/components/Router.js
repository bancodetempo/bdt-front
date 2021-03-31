import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Transfer from 'pages/Transfer/index';
import Extract from 'pages/Extract';

const routes = [
  {
    path: '/',
    component: <Transfer />
  },
  {
    path: '/extrato',
    component: <Extract />
  }
];

const Routes = () => {
  return <BrowserRouter>
    <Switch>
      {
        routes.map(
          (route) => {
            return <Route key={route.path} exact path={route.path}>
              {route.component}
            </Route>;
          }
        )
      }
    </Switch>
  </BrowserRouter>;
};

export default Routes;
