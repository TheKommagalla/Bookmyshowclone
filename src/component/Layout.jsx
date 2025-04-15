import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
function Layout() {
  return (
    <>
    <Navbar />
    
        <Outlet /> {/* This will render the matching route's component */}
   

    </>
  )
}
export default  Layout