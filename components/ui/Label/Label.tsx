import React from 'react';
import { LabelProps } from './Label.types';

function Label({ text, htmlFor, className }: LabelProps): React.JSX.Element {
  return (
    <label htmlFor={htmlFor} className={`text-gray-700 ${className}`}>
      {text}
    </label>
  );
}

export default Label;
