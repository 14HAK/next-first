import Card from '@/components/card';
import React from 'react';

export const metadata = {
  title: 'posts',
};

const fetchPost = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return data;
};

const Post = async () => {
  const post = await fetchPost();

  return (
    <div className='grid grid-cols-4 gap-5 p-5'>
      {post?.map((singlePost, i) => (
        <>
          <Card key={i} post={singlePost}></Card>
        </>
      ))}
    </div>
  );
};

export default Post;
