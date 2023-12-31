import React from 'react';

const SinglePostCard = ({ singlePost }) => {
  const { id, title, body } = singlePost;
  return (
    <section className='p-5 mx-36 my-10 border border-amber-500 bg-amber-100 rounded-md hover:shadow-lg hover:shadow-amber-300 duration-300 cursor-pointer'>
      <h1 className='text-3xl text-slate-900 uppercase mb-3 font-bold'>
        <span className='underline'>post id:</span> {id}
      </h1>
      <h4 className='text-2xl text-slate-600 capitalize mb-1 font-semibold'>
        {title}
      </h4>
      <p className='font-normal text-slate-500 lowercase'>{body}</p>
    </section>
  );
};

export default SinglePostCard;
