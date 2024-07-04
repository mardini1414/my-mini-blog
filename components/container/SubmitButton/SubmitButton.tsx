'use client';

import Button from '@/components/ui/Button/Button';
import React from 'react';
import { useFormStatus } from 'react-dom';
import { SubmitButtonProps } from './SubmitButton.types';

function SubmitButton({
  variant,
  children,
}: SubmitButtonProps): React.JSX.Element {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant={variant} disabled={pending}>
      {children}
    </Button>
  );
}

export default SubmitButton;
