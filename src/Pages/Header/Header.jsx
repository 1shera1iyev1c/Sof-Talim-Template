import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Image/logo.png'
import './Header.scss'

export const Header = () => {
  return (
    <header className='pt-3 pb-3'>
      <div className='container d-flex align-items-center justify-content-between'>
      <img src={logo} alt="logo" width={300} height={100} />
      <ul className='list-unstyled d-flex'>
        <li className='me-5'>
            <Link className='text-dark text-decoration-none' to="/">Home</Link>
        </li>
        <li className='me-5'>
            <Link className='text-dark text-decoration-none' to="/comments">Comments</Link>
        </li>
        <li className='me-5'>
            <Link className='text-dark text-decoration-none' to="/users">Users</Link>
        </li>
        <li>
            <Link className='text-dark text-decoration-none' to="/todos">Todos</Link>
        </li>
      </ul>
      <a href="https://t.me/Sof_talim_admin" className='btn btn-primary'>Contact Us</a>
    </div>
    </header>
  )
}
