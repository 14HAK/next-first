import React from 'react';

const Pagetoo = ({ params }) => {
  return (
    <div>
      <p>slugs are...</p>
      {params.slug[0]} and {params.slug[1]}
    </div>
  );
};

export default Pagetoo;
