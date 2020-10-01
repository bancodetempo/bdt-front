import React, { useState } from 'react';

import { Endpoints } from 'Endpoints';

import PropTypes from 'prop-types';

import AutocompleteInput from './AutocompleteInput';
import { Autocomplete } from '@material-ui/lab';

import axios from 'axios';

const AsyncAutocomplete = (props) => {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchFromAPI = async (searchedValue) => {
    const response = await axios.get(
      `${Endpoints.users}${searchedValue}`
    );
    return response.data;
  };

  return (
    <Autocomplete
      options={options}
      autoComplete
      value={props.value}
      disableClearable={true}
      onChange={props.onChange}
      getOptionLabel={(option) => {
        return option ? `${option.first_name} ${option.last_name}` : '';
      }}
      getOptionSelected={(option, value) => {
        return option.id === value.id;
      }}
      noOptionsText="Digite seu nome"
      onInputChange={(event, inputValue) => {
        setLoading(true);
        fetchFromAPI(inputValue).then((result) => {
          setLoading(false);
          setOptions(result);
        });
      }}
      renderInput={(params) => (
        <AutocompleteInput
          placeholder={props.placeholder}
          params={params}
          loading={loading}
        />
      )}
    />
  );
};

Autocomplete.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default AsyncAutocomplete;
