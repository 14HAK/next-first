'use client';

import React from 'react';

const handleClientBtn = () => {
  console.log(
    'handle client component! app/demo [server] call this Demp [client] component, with click handler and state management useState.'
  );
};

const Demo = () => {
  return (
    <section className='p-3 m-12 rounded-md border border-red-300 bg-amber-100'>
      <h1 className='text-3xl text-slate-900 uppercase mb-3 font-bold'>
        id: Man Id
      </h1>
      <h4 className='text-2xl text-slate-600 capitalize mb-1 font-semibold underline'>
        title is here
      </h4>
      <p className='font-normal text-slate-500 lowercase'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, tenetur!
      </p>
      <button
        onClick={handleClientBtn}
        className='py-1 px-5 rounded-md bg-slate-500 text-slate-100 hover:bg-slate-100 hover:text-slate-500 duration-100 hover:shadow-slate-500 border border-transparent hover:border hover:border-amber-600 capitalize mt-2'
      >
        click me
      </button>
    </section>
  );
};

export default Demo;
