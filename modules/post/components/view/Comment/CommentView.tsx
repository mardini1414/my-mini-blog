import React from 'react';
import CommentCard from '../../container/Card/Comment/CommentCard';
import { getCommentByPostId } from '@/modules/post/action/comment/comment-action';
import { Comment } from '@/types/Response.type';
import { CommentViewProps } from './CommentView.types';

async function CommentView(
  props: CommentViewProps
): Promise<React.JSX.Element> {
  const response = await getCommentByPostId(props.postId);
  return (
    <div>
      <div className="mb-3">
        <h3 className="text-dark">Comments</h3>
      </div>
      {!!response?.data
        ? response.data.map((comment: Comment) => (
            <CommentCard
              key={comment.id}
              name={comment.name}
              email={comment.email}
              body={comment.body}
            />
          ))
        : null}
    </div>
  );
}

export default CommentView;
