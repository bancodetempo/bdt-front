import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

export const Wrapper = withStyles({
  root: {
    width: '100%',
    height: '100%',
    boxShadow: 'none'
  }
})(Paper);

export const Container = withStyles({
  root: {
    height: '46vh',
    borderBottom: '1px solid #e4e4e4'
  }
})(TableContainer);

export const Head = withStyles({
  root: {
    backgroundColor: '#F0FDFF',
    fontWeight: 'bold',
    padding: '0.3% 1%'
  }
})(TableCell);

export const Cell = withStyles({
  root: {
    fontSize: '14px',
    padding: '0.8% 1%'
  }
})(TableCell);

export const Row = withStyles({
  root: {
    '&:hover': {
      backgroundColor: '#FFCBE2'
    }
  }
})(TableRow);
