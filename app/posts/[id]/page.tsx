import PostDetailPage from '@/modules/post/pages/detail/PostDetailPage';
import React from 'react';

function Page({ params }: { params: { id: string } }): React.JSX.Element {
  return <PostDetailPage id={Number(params.id)} />;
}

export default Page;
