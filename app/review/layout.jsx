import React from 'react';

const ReviewLayout = ({ children }) => {
  return (
    <>
      <div className='border border-amber-400 p-2'>
        <header>[nested header]</header>
        <main>{children}</main>
        <footer>[nested footer]</footer>
      </div>
    </>
  );
};

export default ReviewLayout;
