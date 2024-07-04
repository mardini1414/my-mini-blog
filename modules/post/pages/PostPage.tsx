import React, { Suspense } from 'react';
import MainLayout from '../../../components/layout/MainLayout';
import PostView from '../components/view/Post/PostView';
import PostSkeletonView from '../components/view/Post/Skeleton/PostSkeletonView';
import { PostPageProps } from './PostPage.types';

async function PostPage({ page }: PostPageProps): Promise<React.JSX.Element> {
  return (
    <MainLayout>
      <div>
        <h1 className="text-2xl mb-4 text-dark">Posts</h1>
        <Suspense fallback={<PostSkeletonView />}>
          <PostView page={page || 1} />
        </Suspense>
      </div>
    </MainLayout>
  );
}

export default PostPage;
