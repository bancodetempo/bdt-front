import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import ButtonM from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export const Input = withStyles({
  root: {
    width: '20vw',
    height: '7vh',
    '& .MuiFilledInput-root': {
      padding: '2% 2.5%  !important'
    },
    '& .MuiFilledInput-input': {
      padding: '3% 2%'
    },
    '& .MuiAutocomplete-inputRoot': {
      padding: '2% 1%'
    }
  }
})(TextField);

export const OrderContent = withStyles({
  root: {
    width: '90%',
    padding: '0'
  }
})(CardContent);

export const OrderTitle = withStyles({
  root: {
    fontFamily: 'IBM Plex Sans',
    fontWeight: 'bold',
    fontSize: '2.5vw',
    lineHeight: '42px',
    color: '#19B7E6',
    textAlign: 'center',
    margin: '2.5% 0 1% 0'
  }
})(Typography);

export const OrderSubtitle = withStyles({
  root: {
    marginBottom: '3%',
    fontFamily: 'Roboto',
    fontWweight: 'normal',
    fontSize: '1vw',
    lineHeight: '19px',
    color: '#4F4F4F',
    textAlign: 'center'
  }
})(Typography);

export const Button = withStyles({
  root: {
    backgroundColor: '#EB5757',
    borderRadius: '4px',
    color: 'white',
    width: '20vw',
    fontSize: '18px',
    '&:hover': {
      backgroundColor: '#973737'
    }
  }
})(ButtonM);
