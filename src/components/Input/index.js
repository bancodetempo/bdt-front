import React from 'react';
import './index.css';

import { Input } from './Styles';

const inputProps = {
  step: 0.5,
  min: 0
};

const InputOrder = (props) =>
  <Input
    required
    type={props.type}
    variant="filled"
    inputProps={inputProps}
    placeholder={props.placeholder}
    name={props.name}
    onChange={props.onChange}
    value={props.value}
  />;

export default InputOrder;
