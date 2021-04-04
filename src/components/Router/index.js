import React from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Transfer from 'pages/Transfer/index';
import Extract from 'pages/Extract';
import Header from 'components/Header/index';
import Footer from 'components/Footer/index';
import {
  CardOrder,
  Main
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
  return <BrowserRouter>
    <Header />
    <Main>
      <CardOrder>
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
      </CardOrder>
    </Main>
    <Footer />
  </BrowserRouter>;
};

export default Routes;
