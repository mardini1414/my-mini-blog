import React from 'react';
import { ButtonProps } from './Button.types';

function Button(props: ButtonProps): React.JSX.Element {
  const {
    type = 'button',
    variant = 'primary',
    disabled = false,
    onClick,
    children,
  } = props;

  let variantClass = '';
  let disabledClass = '';

  switch (variant) {
    case 'primary':
      variantClass = 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-600';
      disabledClass = 'bg-blue-300 focus:ring-0 cursor-not-allowed';
      break;
    default:
      variantClass = 'bg-red-600 hover:bg-red-700 focus:ring-red-600';
      disabledClass = 'bg-red-300 focus:ring-0 cursor-not-allowed';
      break;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
        disabled ? disabledClass : variantClass
      }
      `}
    >
      {children}
    </button>
  );
}

export default Button;
