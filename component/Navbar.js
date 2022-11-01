import React from 'react'
import {  NavLink } from 'react-router-dom'

export default function navbar() {
    return (
        <div className=' bg-slate-200 h-20 '>
            <nav>
                <ul className=' flex font-semibold no-underline mr-[10rem] float-right space-x-10 text-3xl space-y-4 -tracking-wide'>
                    <li></li>
                    <li><NavLink className="link" to='/'>Home</NavLink></li>
                    <li><NavLink className=' link' to='/about'>About</NavLink></li>
                    <li><NavLink className='link' to='/services'>Services</NavLink></li>
                    <li><NavLink className='link'to='/user'>User</NavLink></li>
                    <li><NavLink className='link'to='/filter'>Filter</NavLink></li>
                    <li><NavLink className='link border-2 border-fuchsia-500 hover:bg-purple-500 rounded-3xl active:bg-purple-300 'to='/login'>Login</NavLink></li>


                </ul>
            </nav>
        </div>
    )
}
