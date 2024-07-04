'use server';

import config from '@/config';
import { Comment, Pagination } from '@/types/Response.type';

const { apiUrl, accessToken } = config;
const options = {
  headers: {
    Authorization: 'Bearer ' + accessToken,
    'Content-Type': 'application/json',
  },
};

export async function getCommentByPostId(
  id: number
): Promise<Pagination<Comment> | null> {
  const res = await fetch(apiUrl + `/public/v1/posts/${id}/comments`, options);
  if (res.ok) {
    return res.json();
  }
  return null;
}
