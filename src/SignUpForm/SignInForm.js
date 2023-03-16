import React from 'react';
import Button from './Button';
import './SignInForm.css';
const SignInForm = () => {
  return (
    
    <>
    <div className='box'>
        <div className="heading-part">
            <h1> Welcome! </h1>
            <h5>Log in your account</h5>
        </div>

        
        <div className='input-type'>
            <h5 style={{color: '#454545'}}>
                Your Email
            </h5>
            
                <input type="email" placeholder="Enter your email" id="" required='' className='btn-1'/>
                
            <h5 style={{color: '#454545'}}>
                Password
            </h5>
         
            <input type="password" placeholder="Enter your password" id="" required='eye' className='btn-2' /> <br></br>
                <br />
            <input type="checkbox" name="Remeber me" id="" /> Remeber Me
            <space></space><space></space><space></space><space></space><space></space><space></space><space></space>
            <span style={{color: 'blue' , cursor:'pointer' , fontSize:'0.9rem'}}>Forgot Password? </span>
        </div>
        <br /><br />
        <span>
        <button className='login'> Login </button>
        </span>
        
        <div style={{paddingLeft:'3rem'}}>
      <br />
            Don't have any account?  <a href='./SignUpForm.js' target={'_blank'} style={{textDecoration: 'none'}}> Sign Up </a>
        </div>
    </div>
    </>
  );
};

export default SignInForm;
