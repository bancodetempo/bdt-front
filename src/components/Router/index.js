import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Transfer from 'pages/Transfer/index';
import Extract from 'pages/Extract';
import {
  CardOrder,
  Theme
} from './Styles';

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
  return <ThemeProvider theme={Theme}>
    <CardOrder>
      <BrowserRouter>
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
      </BrowserRouter>
    </CardOrder>
  </ThemeProvider>;
};

export default Routes;
