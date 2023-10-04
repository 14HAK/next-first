import React from 'react';

export const metadata = {
  title: 'demo',
};

const DemoPage = () => {
  return (
    <section className='p-3 border border-red-300 bg-amber-300'>
      <h1 className='text-3xl text-slate-900 uppercase mb-3 font-bold'>
        id: 1
      </h1>
      <h4 className='text-2xl text-slate-600 capitalize mb-1 font-semibold underline'>
        title is here
      </h4>
      <p className='font-normal text-slate-500 lowercase'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, tenetur!
      </p>
    </section>
  );
};

export default DemoPage;
