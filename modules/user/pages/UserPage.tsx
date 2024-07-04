import React from 'react';
import MainLayout from '../../../components/layout/MainLayout';
import UserView from '../components/view/User/UserView';
import { UserPageProps } from './UserPage.types';
import { UserModalProvider } from '@/modules/user/context/user-modal-context';

function UserPage({ page, query }: UserPageProps): React.ReactNode {
  return (
    <UserModalProvider>
      <MainLayout>
        <h1 className="text-2xl mb-4">Users</h1>
        <UserView page={page || 1} query={query || ''} />
      </MainLayout>
    </UserModalProvider>
  );
}

export default UserPage;
