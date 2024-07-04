import React from 'react';

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'danger';
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};
