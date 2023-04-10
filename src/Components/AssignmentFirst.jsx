import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AssignmentFirst = () => {
  const [number, setNumber] = useState(0); // State to store the number
  const [table, setTable] = useState([]); // State to store the table

  const Navigate = useNavigate();

  const generateTable = () => {
    const newTable = [];
    for (let i = 1; i <= 10; i++) {
      newTable.push(
        <tr key={i}>
          <td>{number * i}</td>
        </tr>
      );
    }
    
    setTable(newTable);
    
  };

  const updateNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    setNumber(randomNumber);
  };

  return (
    <>
    <div>
      <button onClick={()=>Navigate('/')}>Go to homepage</button>
    </div>
    <div>
      <h1>Number: {number}</h1>
      <button onClick={updateNumber}>Generate Random Number</button>
      <br />
      <button onClick={generateTable}>Generate Table</button>
      <table>
        <thead>
          <tr>
            <th>Table</th>
          </tr>
        </thead>
        <tbody>{table}</tbody>
      </table>
    </div>
    </>
  );
};

export default AssignmentFirst;
