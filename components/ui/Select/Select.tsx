'use client';

import React from 'react';
import { SelectProps } from './Select.types';

function Select({
  options,
  value,
  defaultValue,
  name,
  onChange = () => {},
}: SelectProps): React.JSX.Element {
  return (
    <div className="flex flex-col">
      <select
        defaultValue={defaultValue}
        value={value}
        name={name}
        onChange={(e) => onChange(e.target.value)}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
