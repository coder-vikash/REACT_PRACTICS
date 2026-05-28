import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function Increment() {
    setCount(count + 1);
  }
  function Decrement() {
    setCount(count - 1);
  }
  function Reset() {
    setCount(0);
  }
  return (
    <>
      <h1>Counting Number</h1>
      <p>Current Count {count}</p>
      <div className="box">
        <button onClick={Increment}>➕Increment</button>
        <button onClick={Decrement}>➖Decrement</button>
        <button onClick={Reset}>🔃Reset</button>
      </div>
    </>
  );
}

export default App;
