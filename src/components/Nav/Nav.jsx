import React from 'react'
import './Nav.css';
import { Link, Outlet } from 'react-router-dom';
import { Cart } from '../Cart/Cart';

const Nav = () => {
  return (
    <>
        <nav className='w-full  flex justify-around sticky top-0 bg-[white] border-b-2 border-slate-200'>
          <Link className='font-black text-xl cursor-pointer decoration-none flex justify-between items-center px-[1.4rem] py-[1rem]' to={'/'}>Schopp</Link>
          {/* <ul> */}
            {/* <li> */}
          <Cart />
            {/* </li> */}
          {/* </ul> */}
        </nav>
        <Outlet />
    </>
  )
}

export default Nav