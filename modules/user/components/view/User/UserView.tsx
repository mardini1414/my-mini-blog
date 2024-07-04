import React from 'react';
import Table from '@/components/ui/Table/Table';
import { getUsers } from '@/modules/user/action/user-action';
import { UserViewProps } from './UserView.types';
import Pagination from '@/components/container/Pagination/Pagination';
import SearchBar from '../../container/SearchBar/SearchBar';
import FormDeleteUser from '../../container/Form/FormDeleteUser/FormDeleteUser';
import CreateUserButton from '../../container/Button/CreateUserButton/CreateUserButton';
import UpdateUserButton from '../../container/Button/UpdateUserButton/UpdateUserButton';
import UpdateUserModal from '../../container/Modal/UpdateUserModal/UpdateUserModal';

async function UserView(props: UserViewProps): Promise<React.JSX.Element> {
  const { page, query } = props;
  const headers = ['name', 'email', 'gender', 'status', 'action'];
  const response = await getUsers(page, query);
  const data = response?.data.map((user) => ({
    name: user.name,
    email: user.email,
    gender: user.gender,
    status: user.status,
    action: (
      <div className="flex gap-2">
        <UpdateUserButton userId={user.id} />
        <FormDeleteUser userId={user.id} />
      </div>
    ),
  })) as { [key: string]: any }[];

  return (
    <>
      <div className="bg-white pt-4 px-2 rounded-lg shadow-sm">
        <div className="flex justify-between gap-4 pt-3 pb-6">
          <SearchBar />
          <CreateUserButton />
        </div>
        <Table headers={headers} data={data} />
        {!!response?.meta.pagination.pages && (
          <div className="flex justify-center mt-6">
            <Pagination pageCount={response?.meta.pagination.pages as number} />
          </div>
        )}
      </div>
      <UpdateUserModal />
    </>
  );
}

export default UserView;
