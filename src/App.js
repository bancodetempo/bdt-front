import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Transfer from './pages/Transfer';


const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Transfer />
        </Route>
      </Switch>
    
    </BrowserRouter>
  )
}

export default App;