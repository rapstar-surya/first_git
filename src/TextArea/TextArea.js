import React, { useState } from 'react'
import './TextArea.css';

export default function TextArea() {
  const [text, setText] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (e) =>{
    console.log(e.target.value);
    if (e.target.value.length > 100){
       setError("Character limit exceeded");
    } else {
      setText(e.target.value);
      setError(null);
    }
  }
  return (
    <div className='Apps'>
      <div className='input-container'>
        <input
          className='input'
          type="text"
          placeholder='write something...'
          onChange={handleChange}
          value={text}
        />
        <span className='error'>{error && error}</span>
      </div>  
    </div>
  )
}
