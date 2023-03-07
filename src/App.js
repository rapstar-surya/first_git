import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Register here ...</h1>
      <div className='form-group'>
        <label for="phone"></label>
        <input type="number" name="phone" placeholder="mobile ..."></input>
        <br></br>
        <br></br>
        <input type="password" name="password" placeholder="password ..."></input>
        <br></br>
        <br></br>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
