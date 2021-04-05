import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

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

export const CardOrder = withStyles({
  root: {
    width: '54vw',
    height: '75vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto'
  }
})(Card);
