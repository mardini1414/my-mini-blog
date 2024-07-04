import React from 'react';

export type InputProps = {
  name?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  defaultValue?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};
