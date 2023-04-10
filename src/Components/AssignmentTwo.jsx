import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AssignmentTwo = () => {
  const [logs, setLogs] = useState([]); // State to store logs

  const Navigate = useNavigate();
  const currentTime = new Date().toLocaleString();

  const handleMouseOver = () => {
    // const currentTime = new Date().toLocaleString();
    const newLogs = [...logs, { time: currentTime, eventName: 'Mouse Over' }];
    setLogs(newLogs);
  };

  const handleMouseOut = () => {
    // const currentTime = new Date().toLocaleString();
    const newLogs = [...logs, { time: currentTime, eventName: 'Mouse Out' }];
    setLogs(newLogs);
  };

  return (
    <>
    <div>
      <button onClick={()=>Navigate('/')}>Go to homepage</button>
    </div>
    <div>
      <h1
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        This is H1
      </h1><hr/>
      <h2><li>Date and Time:</li>  {currentTime}</h2>
      <hr/> <div> This is div - Logs:  </div> <hr/>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Event Name</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.time}</td>
              <td>{log.eventName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default AssignmentTwo;
