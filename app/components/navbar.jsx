import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-red-950 flex gap-2 uppercase p-2'>
      <Link
        href={'/review/review-man'}
        className='text-slate-100 hover:text-red-500 hover:underline'
      >
        rev-man
      </Link>
      <Link
        href={'/review/review-hello'}
        className='text-slate-100 hover:text-red-500 hover:underline'
      >
        rev-hello
      </Link>
    </nav>
  );
};

export default Navbar;
