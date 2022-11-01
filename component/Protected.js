import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Protected(Props) {
    const {Component} = Props;
    const navigate = useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem('login');
        if (!login) {
            navigate('/login')               
        }
    });
  return (
    <div>
      <Component />
    </div>
  )
}
