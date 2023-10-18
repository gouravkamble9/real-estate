import React from 'react'
import "./Navbar.scss"
import Logo from "../../../assets/logo.png"
import NavButton from '../../../utils/NavButton/NavButton'
import DownArrow from '../../../assets/DownArrow.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='logo'>
            <img src={Logo} alt="logo" />
            <span>Hounter</span>
        </div>
        <div className='navLinks'>
            <ul>
                <li><NavButton data="About Us"/></li>
                <li><NavButton data="Article"/></li>
                <li><NavButton data="Property"/></li>
                <li><NavButton data="Sign Up" signup={true}/></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar