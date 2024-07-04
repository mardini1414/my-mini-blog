import React from 'react';
import { PostSkeletonCardProps } from './PostSkeletonCard.types';

function PostSkeletonCard({ isDetail = false }: PostSkeletonCardProps) {
  return (
    <div
      className={`bg-white p-4 rounded-sm shadow-sm animate-pulse ${
        !isDetail && 'h-[200px]'
      }`}
    >
      {isDetail && (
        <header>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gray-200 rounded-full p-2">
              <div className="h-[24px] w-[24px]"></div>
            </div>
            <div className="flex flex-col w-full">
              <span className="block h-3 bg-gray-200 w-1/2 rounded mb-2"></span>
              <small className="block h-2 bg-gray-200 w-2/3 rounded"></small>
            </div>
          </div>
        </header>
      )}
      <div className="mb-3 rounded h-3 bg-gray-200"></div>
      <div className="rounded h-[140px] bg-gray-200"></div>
    </div>
  );
}

export default PostSkeletonCard;
