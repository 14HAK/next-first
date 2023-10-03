import Navbar from '@/components/navbar';
import React from 'react';

const ReviewLayout = ({ children }) => {
  return (
    <>
      <div className='border border-amber-400 p-2'>
        <Navbar></Navbar>
        <main>{children}</main>
        <footer>[nested footer]</footer>
      </div>
    </>
  );
};

export default ReviewLayout;
