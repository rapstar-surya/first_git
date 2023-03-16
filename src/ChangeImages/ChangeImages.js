import React, { useState } from 'react';

function ChangeImages() {
  const [image, setImage] = useState('https://media.istockphoto.com/id/1431579031/photo/investment-and-finance-concept-2023-sitting-on-financial-graph-background.jpg?s=612x612&w=is&k=20&c=DpZO-T-QvYZUdUy4UTgCaCvTZgVX5CJskmsgEU60rHc='); 
  
  const changeImage = () => {
    setImage('https://media.istockphoto.com/id/1353134048/photo/arrow-on-a-blue-financial-graph.jpg?s=612x612&w=0&k=20&c=DY4bPJFqiD0cJg2IRo590tB5M6zCyrxxJRJGDDKXMf4='); 
  };

  return (
    <div className="App"> 
    
      <div className="left">
        <img src={image} alt="placeholder" />
      </div>
      <div className="right">
        <button onClick={changeImage}>Change Pic</button>
      </div>
      
    </div>
  );
}

export default ChangeImages;
