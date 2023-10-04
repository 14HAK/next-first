'use client';
import React, { useState } from 'react';

const More = ({ children }) => {
  const [foo, setFoo] = useState(false);

  const handleclick = () => {
    console.log(foo);
  };

  return (
    <>
      {children}
      <button
        onClick={handleclick}
        className='py-1 px-5 rounded-md bg-slate-500 text-slate-100 hover:bg-slate-100 hover:text-slate-500 duration-100 hover:shadow-slate-500 border border-transparent hover:border hover:border-amber-600 capitalize mt-2'
      >
        click me
      </button>
    </>
  );
};

export default More;
