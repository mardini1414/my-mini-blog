'use client';

import React from 'react';
import { FormDeleteUserProps } from './FormDeleteUser.types';
import { Trash } from 'lucide-react';
import { deleteUserById } from '@/modules/user/action/user-action';
import SubmitButton from '@/components/container/SubmitButton/SubmitButton';

function FormDeleteUser({ userId }: FormDeleteUserProps): React.JSX.Element {
  return (
    <form action={deleteUserById}>
      <input type="hidden" name="id" value={userId} />
      <SubmitButton variant="danger">
        <Trash size={14} />
      </SubmitButton>
    </form>
  );
}

export default FormDeleteUser;
