import React from 'react'
import Style from "./Navbar.module.css"
import { Link } from 'react-router-dom'
import images from "../Images/logo.svg"
import { MdArrowDropDown } from "react-icons/md";

const Navbar = () => {
  return (


    <nav className={Style.navbar}>
      <div className={Style.navContainer}>
        <div className={Style.head}>
          <Link><img src={images} alt={images} /></Link>
        </div>


        <div className={Style.navItems}>

          <ul>
            <li> <Link to='/'>Home</Link> </li>

            <li> 
              <Link to='/Services'>Services</Link>
              <MdArrowDropDown className={Style.icon} />
           </li>

            <li> <Link to='/Career'>Partners</Link>
              <MdArrowDropDown className={Style.icon} />
            </li>


            <li> <Link to='/About'>Articles</Link></li>


            <button> <Link to='/Contact'>Get in touch</Link></button>

          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar