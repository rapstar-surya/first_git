import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './Navbar.module.css'
const Navbar = () => {

    const Navigate = useNavigate();

  return (
    <div>
      <nav>
        <ul className={style.main}>
            <li onClick={()=>Navigate("/")}>Home</li>
            <li onClick={()=>Navigate("/about")}>About</li>
            <li onClick={()=>Navigate("/login")}>Login</li>
            <li onClick={()=>Navigate("/register")}>Register</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
