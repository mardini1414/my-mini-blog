import React from 'react';
import PostSkeletonCard from '../../../container/Card/Post/Skeleton/PostSkeletonCard';

async function PostSkeletonView(): Promise<React.JSX.Element> {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array(6)
        .fill(1)
        .map((v, i) => (
          <PostSkeletonCard key={i + v} />
        ))}
    </div>
  );
}

export default PostSkeletonView;
