'use server';

import config from '@/config';
import { User, Pagination, Detail } from '@/types/Response.type';
import { revalidatePath } from 'next/cache';

const { apiUrl, accessToken } = config;
const options = {
  headers: {
    Authorization: 'Bearer ' + accessToken,
    'Content-Type': 'application/json',
  },
};

export async function getUsers(
  page: number,
  name?: string
): Promise<Pagination<User> | null> {
  const res = await fetch(
    `${apiUrl}/public/v1/users?page=${page}&name=${name || ''}`,
    options
  );

  if (res.ok) {
    return res.json();
  }

  return null;
}

export async function getUserById(
  id: number | undefined
): Promise<Detail<User> | null> {
  const res = await fetch(apiUrl + '/public/v1/users/' + id, options);
  if (res.ok) {
    revalidatePath('/users', 'page');
    return res.json();
  }
  return null;
}

export async function createUser(prevState: any, form: FormData): Promise<any> {
  const raw = {
    name: form.get('name'),
    email: form.get('email'),
    gender: form.get('gender'),
    status: form.get('status'),
  };

  const res = await fetch(apiUrl + '/public/v1/users', {
    method: 'post',
    body: JSON.stringify(raw),
    ...options,
  });

  if (res.ok) {
    revalidatePath('/users', 'page');
    return {
      message: 'user created',
    };
  }

  return res.json();
}

export async function updateUser(prevState: any, form: FormData): Promise<any> {
  const raw = {
    id: form.get('id'),
    name: form.get('name'),
    email: form.get('email'),
    gender: form.get('gender'),
    status: form.get('status'),
  };

  const res = await fetch(apiUrl + '/public/v1/users/' + form.get('id'), {
    method: 'put',
    body: JSON.stringify(raw),
    ...options,
  });

  if (res.ok) {
    revalidatePath('/users', 'page');
    return {
      message: 'user updated',
    };
  }

  return res.json();
}

export async function deleteUserById(form: FormData): Promise<string | null> {
  const res = await fetch(apiUrl + '/public/v1/users/' + form.get('id'), {
    method: 'delete',
    ...options,
  });

  if (res.ok) {
    revalidatePath('/users', 'page');
    return 'user success deleted';
  }

  return null;
}
