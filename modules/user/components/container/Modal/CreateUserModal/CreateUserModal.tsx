import React, { useEffect } from 'react';
import Modal from '@/components/container/Modal/Modal';
import { ModalProps } from '@/components/container/Modal/Modal.types';
import SubmitButton from '@/components/container/SubmitButton/SubmitButton';
import Input from '@/components/ui/Input/Input';
import Label from '@/components/ui/Label/Label';
import Select from '@/components/ui/Select/Select';
import { createUser } from '@/modules/user/action/user-action';
import { useFormState } from 'react-dom';
import Alert from '@/components/ui/Alert/Alert';
import { showErrorMessage } from '@/utils/response-util';

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

function CreateUserModal(props: ModalProps): React.JSX.Element {
  const [state, formAction] = useFormState(createUser, initialState);

  useEffect(() => {
    state.message = null;
  }, [props.isOpen]);

  return (
    <Modal {...props}>
      <div>
        {state?.message && <Alert>{state?.message}</Alert>}
        <form action={formAction} className="grid gap-4 mt-4">
          <div>
            <Label text="Name:" className="block mb-1" />
            <Input placeholder="Enter name" name="name" required />
            {showErrorMessage(state?.data, 'name') && (
              <span className="text-red-500 text-xs mt-1">
                {showErrorMessage(state?.data, 'name')}
              </span>
            )}
          </div>
          <div>
            <Label text="Email:" className="block mb-1" />
            <Input
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
            <Select name="gender" options={genderOptions} />
          </div>
          <div>
            <Label text="Status:" className="block mb-1" />
            <Select name="status" options={statusOption} />
          </div>
          <div className="grid mt-6">
            <SubmitButton>Create</SubmitButton>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default CreateUserModal;
