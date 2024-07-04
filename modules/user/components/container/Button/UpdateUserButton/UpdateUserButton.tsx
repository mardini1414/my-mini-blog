'use client';

import React from 'react';
import Button from '@/components/ui/Button/Button';
import { Pencil } from 'lucide-react';
import { useUserModal } from '@/modules/user/context/user-modal-context';
import { UpdateUserButtonProps } from './UpdateUserButton.type';

function UpdateUserButton({
  userId,
}: UpdateUserButtonProps): React.JSX.Element {
  const { setIsOpen, setUserId } = useUserModal();

  function setUpdate() {
    setUserId && setUserId(userId);
    setIsOpen(true);
  }

  return (
    <Button onClick={setUpdate}>
      <Pencil size={14} />
    </Button>
  );
}

export default UpdateUserButton;
