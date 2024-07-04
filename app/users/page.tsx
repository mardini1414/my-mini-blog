import React from 'react';
import UserPage from '@/modules/user/pages/UserPage';

type PropTypes = {
  searchParams?: {
    query?: string;
    page?: number;
  };
};

function Page({ searchParams }: PropTypes): React.ReactNode {
  return <UserPage page={searchParams?.page} query={searchParams?.query} />;
}

export default Page;
