import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
    const Navigate=useNavigate()

  return (
    
    <div>
      <h1>Contact Page</h1>
      <p>Contact us for any inquiries.</p>
      
      <button onClick={()=>Navigate('/')}>Go to Home page</button>
    </div>
  )
}
