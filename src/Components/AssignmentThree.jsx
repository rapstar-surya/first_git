import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AssignmentThree = () => {
  // Array with greetings
  const greetings = ['Good morning', 'Good afternoon', 'Good evening', 'Good night', 'So jao']; 
  // State to store current greeting
  const [currentGreeting, setCurrentGreeting] = useState(greetings[0]); 

  const Navigate = useNavigate();
  
  const handleClick = () => {
    let nextGreeting = greetings[0];
    for (let i = 0; i < greetings.length; i++) {
      if (greetings[i] === currentGreeting) {
        nextGreeting = (i + 1 === greetings.length) ? greetings[0] : greetings[i + 1];
        break;
      }
    }
    setCurrentGreeting(nextGreeting);
  };

  return (
    <>
    <div>
      <button onClick={()=>Navigate('/')}>Go to homepage</button>
    </div>
    <div>
      <h1>{currentGreeting}</h1>
      <button onClick={handleClick}>Next Greeting</button>
    </div>
    </>
  );
};

export default AssignmentThree;
