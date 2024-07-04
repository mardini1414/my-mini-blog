import React from 'react';
import Navbar from '../container/Navbar/Navbar';

function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactNode {
  return (
    <>
      <Navbar />
      <main className="container px-2 md:px-4 mx-auto pt-4">{children}</main>
    </>
  );
}

export default MainLayout;
