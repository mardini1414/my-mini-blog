import React from 'react';
import PostCard from '../../../container/Card/Post/PostCard';
import { getPostByid } from '@/modules/post/action/post/post-action';
import { PostDetailViewProps } from './PostDetailView.types';
import { getUserById } from '@/modules/user/action/user-action';

async function PostDetailView(
  props: PostDetailViewProps
): Promise<React.JSX.Element> {
  const { id } = props;
  const postResponse = await getPostByid(id);
  const userResponse = await getUserById(postResponse?.data?.user_id);
  return (
    <div>
      <PostCard
        isDetail={true}
        key={postResponse?.data.id}
        id={postResponse?.data.id}
        title={postResponse?.data.title}
        body={postResponse?.data.body}
        userName={userResponse?.data.name || 'User has been deleted'}
        userEmail={userResponse?.data.email || '-'}
      />
    </div>
  );
}

export default PostDetailView;
