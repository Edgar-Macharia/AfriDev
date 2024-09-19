import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <NavBar />
          <div className='ms-3' style={{"minHeight":"100vh"}}>
            <Outlet />
          </div>

        <Footer />
    </div>
  )
}

export default Layout