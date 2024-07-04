import CommentCardSkeleton from '@/modules/post/components/container/Card/Comment/Skeleton/CommentCardSkeleton';
import React from 'react';

function CommentSkeletonView() {
  return (
    <div>
      <div className="mb-3">
        <h3 className="text-dark">Comments</h3>
      </div>
      {Array(3)
        .fill(1)
        .map((v, i) => (
          <CommentCardSkeleton key={v + i} />
        ))}
    </div>
  );
}

export default CommentSkeletonView;
