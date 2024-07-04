import React from 'react';
import Link from 'next/link';
import { User } from 'lucide-react';

async function PostCard(props: PostCardProps): Promise<React.JSX.Element> {
  const { id, title, body, userName, userEmail, isDetail = false } = props;

  const card = (
    <article
      className={`bg-white p-4 rounded shadow-sm ${!isDetail && 'h-[200px]'}`}
    >
      {isDetail && (
        <header>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gray-200 rounded-full p-2">
              <User size={24} className="text-gray-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-dark">{userName}</span>
              <small className="text-gray-400 text-xs">{userEmail}</small>
            </div>
          </div>
        </header>
      )}
      <h3 className="text-dark font-semibold mb-3">{title}</h3>
      <p
        className={`text-gray-500 text-sm leading-relaxed ${
          !isDetail && 'line-clamp-4'
        }`}
      >
        {body}
      </p>
    </article>
  );

  if (isDetail) return card;

  return <Link href={`/posts/${id}`}>{card}</Link>;
}

export default PostCard;
