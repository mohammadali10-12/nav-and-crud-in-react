import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Services() {
  return (
    <div>
      <h1>our services page</h1>
      <span className='text-2xl  m-[30px]' ><Link to='/light'>Light</Link></span>
      <span className='text-2xl  ' ><Link to='/other'>Other</Link></span>
      <Outlet/>
    </div>
  )
}
