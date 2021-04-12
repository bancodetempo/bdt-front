import React from 'react';
import './index.css';

import { Input } from './Styles';

const InputOrder = (props) => {
  const inputProps = {
    step: props.step,
    min: props.min,
    max: props.max
  };

  return (
    <Input
      required
      type={props.type}
      variant="filled"
      inputProps={inputProps}
      placeholder={props.placeholder}
      name={props.name}
      onChange={props.onChange}
      value={props.value}
      style={{ width: `${props.width}` }}
    />
  );
};

export default InputOrder;
