import React, { Suspense } from 'react';
import MainLayout from '../../../../components/layout/MainLayout';
import PostDetailView from '../../components/view/Post/Detail/PostDetailView';
import CommentView from '../../components/view/Comment/CommentView';
import CommentSkeletonView from '@/modules/post/components/view/Comment/Skeleton/CommentSkeletonView';
import PostDetailSkeletonView from '@/modules/post/components/view/Post/Skeleton/PostDetailSkeletonView';

function PostDetailPage({ id }: { id: number }): React.JSX.Element {
  return (
    <MainLayout>
      <h1 className="text-2xl mb-4 text-dark">Posts detail</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Suspense fallback={<PostDetailSkeletonView />}>
            <PostDetailView id={id} />
          </Suspense>
        </div>
        <Suspense fallback={<CommentSkeletonView />}>
          <CommentView postId={id} />
        </Suspense>
      </div>
    </MainLayout>
  );
}

export default PostDetailPage;
