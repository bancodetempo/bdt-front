import React from 'react';
import 'index.css';

import { Provider } from 'react-redux';
import store from './utils/store';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Router from './components/Router';

export const Theme = createMuiTheme({
  palette: {
    primary: {
      light: '#037fff',
      contrastText: '#fff',
      main: '#8FDFF4',
      dark: '#10121b'
    }
  }
});

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <div className='app'>
          <Router />
        </div>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
