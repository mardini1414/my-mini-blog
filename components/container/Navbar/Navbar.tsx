'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

function Navbar(): React.ReactNode {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="container px-2 md:px-4 mx-auto bg-white border-b">
      <nav className="h-14 flex justify-between items-center">
        <h1 className="text-2xl text-dark">My Blog</h1>
        <ul
          className={`text-center bg-white flex flex-col lg:flex-row gap-3 lg:gap-6 absolute lg:relative w-full lg:w-max left-0 top-14 lg:top-0 transition-all ease-linear duration-100 ${
            isOpen ? 'h-dvh py-6 lg:h-min lg:py-0' : 'h-0 lg:h-min py-0'
          } overflow-hidden`}
        >
          <li>
            <Link
              className="lg:text-sm text-gray-500 hover:text-dark"
              href={'/posts'}
            >
              Post
            </Link>
          </li>
          <li>
            <Link
              className="lg:text-sm text-gray-500 hover:text-dark"
              href={'/users'}
            >
              User
            </Link>
          </li>
        </ul>
        <div className="lg:hidden" onClick={() => setIsOpen((open) => !open)}>
          {isOpen ? <X /> : <Menu />}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
