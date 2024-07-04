'use client';

import React from 'react';
import ReactPaginate from 'react-paginate';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { PaginationProps } from './Pagination.types';

function Pagination({ pageCount }: PaginationProps): React.JSX.Element {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  const params = new URLSearchParams(searchParams);
  const page = params.get('page') ? Number(params.get('page')) : 1;

  function handleChange(selectedItem: { selected: number }) {
    params.set('page', String(selectedItem.selected + 1));
    router.replace(`${pathName}?${params.toString()}`);
  }

  return (
    <ReactPaginate
      containerClassName="h-14 flex items-center text-sm w-max"
      pageClassName="text-xs md:text-base text-dark cursor-pointer"
      pageLinkClassName="block p-3"
      nextLinkClassName="block p-3"
      previousLinkClassName="block p-3"
      marginPagesDisplayed={1}
      pageCount={pageCount}
      nextLabel={<ChevronsRight size={14} />}
      previousLabel={<ChevronsLeft size={14} />}
      activeLinkClassName={'font-semibold'}
      disabledLinkClassName="text-gray-500"
      disableInitialCallback={true}
      onPageChange={handleChange}
      forcePage={page - 1}
    />
  );
}

export default Pagination;
