import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {
//   const navigate = useNavigate();
// const setToNav = (url)=>{
//   navigate(url)
// }

  return (
    <div>
      
      <h1 className='text-red-600'>home page</h1>
      <p className='text-[20px] ml-4 text-red-500'>this is our home page and in this work any where to along her and good to all
      </p>
      <Link className='text-center' to='/about'>move to about page</Link><br />
      <p className='text-2xl  ml-[140px]' ><Link to='/user'>User Page</Link></p>
      
      <button className='pt-2 pb-2 pl-3 pr-3 text-white bg-purple-500 rounded-full active:bg-purple-600 ml-[600px]' >Move About</button><br /><br/>

    </div>
  )
}
