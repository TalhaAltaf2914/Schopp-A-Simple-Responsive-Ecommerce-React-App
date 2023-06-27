import React from 'react'
import './Nav.css';
import { Outlet } from 'react-router-dom';

const Nav = () => {
  return (
    <>
        <nav>Nav</nav>
        <Outlet />
    </>
  )
}

export default Nav