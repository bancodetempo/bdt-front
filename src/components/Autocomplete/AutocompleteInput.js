import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Input } from './Styles';

const AutocompleteInput = (props) => {
  return (
    <Input
      {...props.params}
      required
      placeholder={props.placeholder}
      variant="filled"
      InputProps={{
        ...props.params.InputProps,
        endAdornment: (
          <React.Fragment>
            {props.loading ? (
              <CircularProgress color="inherit" size={20} />
            ) : null}
            {props.params.InputProps.endAdornment}
          </React.Fragment>
        )
      }}
    />
  );
};

AutocompleteInput.propTypes = {
  params: PropTypes.shape({
    InputProps: PropTypes.shape({
      endAdornment: PropTypes.node.isRequired
    })
  }).isRequired,
  placeholder: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};

export default AutocompleteInput;
