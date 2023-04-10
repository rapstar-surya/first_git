import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const Navigate = useNavigate();

  return (
    <header className="App">
      <h1>Click on below text to see assignments</h1>
      <div className="header">
        <button className="btn" onClick={() => Navigate("/first")}>
          1st Assignment
        </button>
        <button className="btn" onClick={() => Navigate("/second")}>
          2nd Assignment
        </button>
        <button className="btn" onClick={() => Navigate("/third")}>
          3rd Assignment
        </button>
      </div>
    </header>
  );
}

export default App;
