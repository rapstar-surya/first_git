import React from 'react';
import Button from './Button';

const SignUpForm = () => {
  return (
    <form>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName" required />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" required />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
      </div>
      <Button label="Sign Up" />
    </form>
  );
};

export default SignUpForm;
