import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Transferencia from './pages/tranferencia';


const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Transferencia />
        </Route>
      </Switch>
    
    </BrowserRouter>
  )
}

export default App;