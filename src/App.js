import React from 'react';
import 'index.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Router from './components/Router';
import styled from 'styled-components';

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

const WholeScreen = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <WholeScreen>
        <Router />
      </WholeScreen>
    </ThemeProvider>
  );
};

export default App;
