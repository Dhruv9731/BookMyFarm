import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Componants/Navbar/Navbar'
import AboutUs from './Pages/AboutUs/AboutUs'

function Layout() {
  return (
    <>
        <Navbar />
        <Outlet />
        <AboutUs />
    </>
  )
}

export default Layout
