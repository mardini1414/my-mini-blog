import React from 'react';
import { getPosts } from '@/modules/post/action/post/post-action';
import { Post } from '@/types/Response.type';
import Pagination from '../../../../../components/container/Pagination/Pagination';
import { PostViewProps } from './PostView.types';
import PostCard from '../../container/Card/Post/PostCard';

async function PostView(props: PostViewProps): Promise<React.JSX.Element> {
  const { page } = props;
  const response = await getPosts(page);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {!!response?.data
          ? response?.data.map((post: Post) => (
              <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
                userId={post.user_id}
              />
            ))
          : null}
      </div>
      {!!response?.meta.pagination.pages && (
        <div className="flex justify-center mt-6">
          <Pagination pageCount={response?.meta.pagination.pages as number} />
        </div>
      )}
    </>
  );
}

export default PostView;
