import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import "./Navbar1.css"


const Navbar1 = () => {
  return (
      
         <nav>
            <NavLink to="/">Home </NavLink>
            <NavLink to="/products">products </NavLink>
            <NavLink to="/about">About </NavLink>
            <NavLink to="/signup">Signup</NavLink>
            <NavLink to="/login">login </NavLink>
             





         </nav>
  )
}

export default Navbar1