export interface Pagination<T> {
  meta: PaginationMeta;
  data: T[];
}

export interface Detail<T> {
  meta: null;
  data: T;
}

export interface PaginationMeta {
  pagination: PaginationData;
}

export interface PaginationData {
  total: number;
  pages: number;
  page: number;
  limit: number;
  links: Links;
}

export interface Create {
  message: string;
}

export interface ValidationError {
  meta: null;
  data: Error[];
}

export interface Error {
  field: string;
  message: string;
}

export interface Links {
  previous: null;
  current: string;
  next: string;
}

export interface Post {
  id: number;
  user_id: number;
  title: string;
  body: string;
}

export interface Comment {
  id: number;
  post_id: number;
  name: string;
  email: string;
  body: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}
