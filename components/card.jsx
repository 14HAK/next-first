import Link from 'next/link';
import React from 'react';

const Card = ({ post }) => {
  let { id, title, body } = post;

  title = title?.slice(0, 15);
  body = body?.slice(0, 100);

  return (
    <section className='p-3 border border-amber-500 bg-amber-100 rounded-md hover:shadow-lg hover:shadow-amber-300 duration-300 cursor-pointer'>
      <h1 className='text-3xl text-slate-900 uppercase mb-3 font-bold'>
        id: {id}
      </h1>
      <h4 className='text-2xl text-slate-600 capitalize mb-1 font-semibold underline'>
        {title}...
      </h4>
      <p className='font-normal text-slate-500 lowercase'>
        {body}...
        <br />
        <span>
          <Link
            href={`post/${id}`}
            className='text-orange-400 hover:text-orange-600 underline hover:no-underline'
          >
            Read more
          </Link>
          ...
        </span>
        <span>
          <Link
            href={`post/${id}/multiple-slug/query`}
            className='text-orange-400 hover:text-orange-600 underline hover:no-underline'
          >
            Read more
          </Link>
          ...
        </span>
      </p>
    </section>
  );
};

export default Card;
