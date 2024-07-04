'use client';

import React, { useEffect, useState } from 'react';
import Modal from '@/components/container/Modal/Modal';
import SubmitButton from '@/components/container/SubmitButton/SubmitButton';
import Input from '@/components/ui/Input/Input';
import Label from '@/components/ui/Label/Label';
import Select from '@/components/ui/Select/Select';
import { updateUser, getUserById } from '@/modules/user/action/user-action';
import { useFormState } from 'react-dom';
import Alert from '@/components/ui/Alert/Alert';
import { showErrorMessage } from '@/utils/response-util';
import { User } from '@/types/Response.type';
import { useUserModal } from '@/modules/user/context/user-modal-context';

const initialState = {
  message: '',
};

const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
];

const statusOption = [
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
];

function UpdateUserModal(): React.JSX.Element {
  const { isOpen, setIsOpen, userId } = useUserModal();
  const [state, formAction] = useFormState(updateUser, initialState);
  const [user, setUser] = useState<User | null>(null);
  const [gender, setGender] = useState<string | undefined>();
  const [status, setStatus] = useState<string | undefined>();

  useEffect(() => {
    async function fetchData() {
      if (userId && isOpen) {
        const res = await getUserById(userId);
        setUser(res?.data ?? null);
        setGender(res?.data.gender);
        setStatus(res?.data.status);
      }
    }

    state.message = '';

    fetchData();
    return () => setUser(null);
  }, [userId, isOpen]);

  return (
    <Modal title="Update User" onClose={() => setIsOpen(false)} isOpen={isOpen}>
      <div>
        {state?.message && <Alert>{state?.message}</Alert>}
        <form action={formAction} className="grid gap-4 mt-4">
          <div>
            <Input type="hidden" name="id" defaultValue={String(userId)} />
            <Label text="Name:" className="block mb-1" />
            <Input
              defaultValue={user?.name}
              placeholder="Enter name"
              name="name"
              required
            />
            {showErrorMessage(state?.data, 'name') && (
              <span className="text-red-500 text-xs mt-1">
                {showErrorMessage(state?.data, 'name')}
              </span>
            )}
          </div>
          <div>
            <Label text="Email:" className="block mb-1" />
            <Input
              defaultValue={user?.email}
              placeholder="Enter email"
              name="email"
              type="email"
              required
            />
            {showErrorMessage(state?.data, 'email') && (
              <span className="text-red-500 text-xs mt-1">
                {showErrorMessage(state?.data, 'email')}
              </span>
            )}
          </div>
          <div>
            <Label text="Gender:" className="block mb-1" />
            <Select
              name="gender"
              value={gender}
              options={genderOptions}
              onChange={(v) => setGender(v)}
            />
          </div>
          <div>
            <Label text="Status:" className="block mb-1" />
            <Select
              name="status"
              value={status}
              options={statusOption}
              onChange={(v) => setStatus(v)}
            />
          </div>
          <div className="grid mt-6">
            <SubmitButton>Update</SubmitButton>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default UpdateUserModal;
