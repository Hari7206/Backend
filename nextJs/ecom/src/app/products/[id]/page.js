import React from 'react'

const page = async ({params}) => {

    let {id} = await params


  return (
   <h1> This is product detail page - {id} </h1>
  )
}

export default page