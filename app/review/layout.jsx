import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: {
    default: 'review-layout',
    template: `%s | review-layouts`,
  },
};

const ReviewLayout = ({ children }) => {
  return (
    <>
      <div className='border border-amber-400 p-2'>
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
        <main>{children}</main>
        <footer>[nested footer]</footer>
      </div>
    </>
  );
};

export default ReviewLayout;
