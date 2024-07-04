'use client';

import React, { useRef } from 'react';
import Input from '@/components/ui/Input/Input';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

function SearchBar(): React.JSX.Element {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set('query', value);
    } else {
      params.delete('query');
    }
    params.set('page', String(1));
    router.replace(`${pathName}?${params.toString()}`);
  }, 400);

  return (
    <div className="w-full">
      <Input
        placeholder="search"
        defaultValue={searchParams.get('query')?.toString()}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchBar;
