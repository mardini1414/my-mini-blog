import { User } from 'lucide-react';
import React from 'react';
import { CommentCardProps } from './CommentCardtypes';

function CommentCard(props: CommentCardProps): React.JSX.Element {
  const { name, email, body } = props;
  return (
    <div className="bg-white shadow-sm p-4 rounded mb-4">
      <header>
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-gray-200 rounded-full p-2">
            <User size={24} className="text-gray-500" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-dark">{name}</span>
            <small className="text-gray-400 text-xs">{email}</small>
          </div>
        </div>
      </header>
      <div className="border border-dark/50 p-4 rounded">
        <p className="text-gray-500 text-sm">{body}</p>
      </div>
    </div>
  );
}

export default CommentCard;
