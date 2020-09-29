import { createMuiTheme, makeStyles } from '@material-ui/core/styles';

export const Styles = makeStyles({
  root: {
    width: '54vw',
    height: '75vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2%'
  },
  content: {
    width: '90%',
    padding: '0'
  },
  title: {
    fontFamily: 'IBM Plex Sans',
    fontWeight: 'bold',
    fontSize: '2.5vw',
    lineHeight: '42px',
    color: '#19B7E6',
    textAlign: 'center',
    margin: '2% 0 1% 0'
  },
  subtitle: {
    marginBottom: '3%',
    fontFamily: 'Roboto',
    fontWweight: 'normal',
    fontSize: '1vw',
    lineHeight: '19px',
    color: '#4F4F4F',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#EB5757',
    borderRadius: '4px',
    color: 'white',
    width: '20vw',
    fontSize: '18px',
    '&:hover': {
      backgroundColor: '#973737'
    }
  },
  input: {
    width: '20vw',
    height: '7vh',
    '& .MuiFilledInput-input': {
      padding: '5% 4%'
    },
    '& .MuiAutocomplete-inputRoot': {
      padding: '2% 1%'
    }
  }
});

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
