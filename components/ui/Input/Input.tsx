import React from 'react';
import { InputProps } from './Input.types';

function Input(props: InputProps): React.JSX.Element {
  const {
    name,
    type = 'text',
    placeholder,
    value,
    defaultValue,
    onChange,
    required = false,
  } = props;
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      required={required}
      defaultValue={defaultValue}
      onChange={onChange}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
    />
  );
}
export default Input;
