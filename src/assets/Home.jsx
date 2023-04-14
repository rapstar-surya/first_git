import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const Navigate = useNavigate();

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home page!</p>
      
      <button onClick={()=>Navigate('/contact')}>Go to contact page</button>

    </div>
  );
}
