import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-slate-700 flex gap-2 uppercase p-5'>
      <Link
        href={'/'}
        className='text-slate-100 hover:text-red-500 hover:underline'
      >
        home
      </Link>
      <Link
        href={'/about'}
        prefetch={false} //[false, true]
        // prefetch={false}, means when click about page its fetch every time.
        className='text-slate-100 hover:text-red-500 hover:underline'
      >
        about
      </Link>
      <Link
        href={'/contact'}
        prefetch={false} //[false, true]
        // prefetch={false}, means when click about page its fetch every time.
        className='text-slate-100 hover:text-red-500 hover:underline'
      >
        contact
      </Link>
      <Link
        href={'/review'}
        className='text-slate-100 hover:text-red-500 hover:underline'
      >
        review
      </Link>
      <Link
        href={'/post'}
        className='text-slate-100 hover:text-red-500 hover:underline'
      >
        post
      </Link>
      <Link
        href={'/demo'}
        className='text-slate-100 hover:text-red-500 hover:underline'
      >
        Demo
      </Link>
    </nav>
  );
};

export default Navbar;
