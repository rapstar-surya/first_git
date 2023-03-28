import React from 'react'
import Style from './Navbar.module.css'
import { useNavigate } from 'react-router-dom'
export default function Navbar() {

  const Navigate = useNavigate();

  return (
    <div>
       <nav className={Style.mainNav}>
      {/* Logo */}
      <div className={Style.logo}>
        <h4>UI/UX design</h4>
      </div>

      {/* Menu links */}
      <ul className={Style.menuLinks}>
        <li onClick={()=>Navigate("/")}>Home</li>
        <li onClick={()=>Navigate("/About")}>About us</li>
        <li onClick={()=>Navigate("/Login")}>Log in</li>
      </ul>

      {/* Profile */}
      <div className={Style.profile}>
        <li>Profile</li>
      </div>
    </nav>
    </div>
  )
}
