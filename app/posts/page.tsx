import PostPage from '@/modules/post/pages/PostPage';

type PropTypes = {
  searchParams?: {
    query?: string;
    page?: number;
  };
};

export default function Page({ searchParams }: PropTypes) {
  return <PostPage page={searchParams?.page} />;
}
