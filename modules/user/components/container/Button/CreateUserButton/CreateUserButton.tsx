'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button/Button';
import { Plus } from 'lucide-react';
import CreateUserModal from '../../Modal/CreateUserModal/CreateUserModal';

function CreateUserButton(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        <Plus />
      </Button>
      <CreateUserModal
        title="Create User"
        onClose={() => setIsOpen(false)}
        isOpen={isOpen}
      />
    </>
  );
}

export default CreateUserButton;
