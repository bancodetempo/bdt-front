import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export const Input = withStyles({
  root: {
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
