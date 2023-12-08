import React from 'react'
import { Outlet } from 'react-router-dom';
import Home from './Home';

const Layout = () => {
  return (
    <>
      <Outlet/>
    </>
  )
}

export default Layout;
