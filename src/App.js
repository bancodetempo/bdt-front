import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Transferencia from './pages/Tranferencia';


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