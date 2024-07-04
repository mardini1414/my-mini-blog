'use server';

import config from '@/config';
import { Detail, Pagination, Post } from '@/types/Response.type';

const { apiUrl, accessToken } = config;
const options = {
  headers: {
    Authorization: 'Bearer ' + accessToken,
    'Content-Type': 'application/json',
  },
};

export async function getPosts(page: number): Promise<Pagination<Post> | null> {
  const res = await fetch(`${apiUrl}/public/v1/posts?page=${page}`, options);
  if (res.ok) {
    return res.json();
  }
  return null;
}

export async function getPostByid(id: number): Promise<Detail<Post> | null> {
  const res = await fetch(apiUrl + '/public/v1/posts/' + id, options);
  if (res.ok) {
    return res.json();
  }
  return null;
}
