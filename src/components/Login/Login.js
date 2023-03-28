import React from 'react';
import Style from './Login.module.css';
import Navbar from '../Home/Navbar';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const Navigate = useNavigate();
  return (
    <>
    <Navbar/>
    <div className={Style.logincontainer}>
      <img src="https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg" alt="Profile" className={Style.profileimg} />
      
      <form className={Style.loginform}>
        <label>
          <input type="email" name="email" placeholder='USERNAME'/>
        </label>
        <label>
          <input type="password" name="password" placeholder='PASSWORD'/>
        </label>
      </form>

      <div className={Style.formfooter}>
        <div className={Style.left}>
          Don't have an account? <br/><span onClick={()=>Navigate("/Register")}>Register</span>
        </div>
        <div className={Style.right}>
          <button type="submit">Login</button>
        </div>
      </div>
    </div>
    </>
  );
}
