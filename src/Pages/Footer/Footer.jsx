import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Image/logo.png'
export const Footer = () => {
  return (
    <footer className='bg-dark pt-5 pb-5' >
      <div className='container d-flex align-items-center justify-content-between'>
      <img src={logo} alt="logo" width={300} height={100} />
      <ul className='list-unstyled d-flex'>
        <li className='me-5'>
            <Link className='text-light text-decoration-none' to="/">Posts</Link>
        </li>
        <li className='me-5'>
            <Link className='text-light text-decoration-none' to="/comments">Comments</Link>
        </li>
        <li className='me-5'>
            <Link className='text-light text-decoration-none' to="/users">Users</Link>
        </li>
        <li>
            <Link className='text-light text-decoration-none' to="/todos">Todos</Link>
        </li>
      </ul>
      <a href="https://t.me/Sof_talim_admin" className='btn btn-primary'>Contact Us</a>
    </div>
    </footer>
  )
}

