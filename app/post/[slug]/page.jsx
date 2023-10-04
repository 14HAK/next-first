import SinglePostCard from '@/components/singlePostCard';
import React from 'react';

const fetchDynamicPost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const singlePost = await res.json();
  return singlePost;
};

//dynamic metadata title set:
export const generateMetadata = async ({ params }) => {
  return {
    title: `post-page: ${params?.slug}`,
  };
};

const SinglePost = async ({ params }) => {
  const slugid = await params?.slug;
  const singlePost = await fetchDynamicPost(slugid);
  return (
    <div>
      <SinglePostCard singlePost={singlePost}></SinglePostCard>
    </div>
  );
};

export default SinglePost;
