import React from 'react';

function CommentCardSkeleton(): React.JSX.Element {
  return (
    <div className="bg-white shadow-sm p-4 rounded mb-4 animate-pulse">
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
      <div className="border bg-gray-200 h-10 rounded"></div>
    </div>
  );
}

export default CommentCardSkeleton;
