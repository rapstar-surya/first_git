import React from 'react'
import Style from './Register.module.css'
import Navbar from '../Home/Navbar'
export default function Register() {
  return (
    <>
    <Navbar/>
    <div className={Style.logincontainer}>
      <img src="https://th.bing.com/th/id/OIP.1CyUQP6saOpecNeo_jbRaAHaH9?pid=ImgDet&rs=1" alt="Profile" className={Style.profileimg} />
      <form className={Style.loginform}>
        <label>
          <input type="email" name="email" placeholder='EMAIL'/>
        </label>
        <label>
          <input type="username" name="username" placeholder='USERNAME'/>
        </label>
        <label>
          <input type="password" name="password" placeholder='PASSWORD'/>
        </label>
        <button type="submit">Register</button>
      </form>
     
    </div>
    </>
  )
}
