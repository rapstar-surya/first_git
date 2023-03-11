// import logo from './logo.svg';
import './App.css';
import { Fragment, useState } from 'react';

function App() {

  const [input, setInput] = useState(0);

  function handleClickButtonIncrease() {
    setInput(input + 1)
  }

  function handleClickButtonDecrease() {
    setInput(input - 1)
  }

  return (
    <Fragment>
      <div className="App">
        {/* 1st problem - onClick - add_every_input_task  */}
        <div align="left">
          <h4 align="center">1st assignment</h4>
          <input></input>
          <button>Add</button>
          <p></p>
        </div>
        <hr />
        <h4 align="center">2nd assignment</h4>
        
        {/* ------------------------------------------------------------------------------------------------------------------------ */}

        {/* 2nd problem - Increase & decrease button will increase &decrease the count by 1 */}

        <h1 id='zero'>{input}</h1>
        <button onClick={handleClickButtonIncrease}>Increase Count</button>

        <button onClick={handleClickButtonDecrease}>Decrease Count</button>

        {/* ------------------------------------------------------------------------------------------------------------------------ */}
        {/* 3rd problem - On every click name will change from Amit to Rajan and vice versa  */}
        <hr />
        <h4 align="center">3rd assignment</h4>
        <div align="left">
          <h1>My name is Amit </h1>
          <button>Change Name</button>
          <hr />
        </div>

      </div>
    </Fragment>
  );
}

export default App;
