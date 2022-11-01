import React from 'react'
import { useParams } from 'react-router-dom'



export default  function User(prop) {
    // const param=useParams();
    // const {name}=param;
console.log(prop.name);
  return (
    <div className='text-2xl text-center text-purple-600 font-serif'>
      {/* <h1>This is {name} page </h1> */}
      <h1>User page {prop.name}</h1>
   
    </div>
  )
}

