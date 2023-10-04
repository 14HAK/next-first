import React from 'react';

const fetchPost = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return data;
};

const Post = async () => {
  const post = await fetchPost();

  return (
    <div>
      <p>{post?.length}</p>
    </div>
  );
};

export default Post;
