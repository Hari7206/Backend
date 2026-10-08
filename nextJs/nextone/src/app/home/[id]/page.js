import React from 'react'

const Page = async ({params} ) => {
 
    let {id} = await params;

  return (
    <div>This is common page where dynamic id is - {id}</div>
  );
};

export default Page;