import { useState } from "react";
import "./App.css";

function App() {
  const [Data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target; // ✅ spelling fixed
    setData({ ...Data, [name]: value });
  };

  const clearInput = () => {
    setData({ name: "", email: "", phoneNumber: "" });
  };

  return (
    <div className="flex">
      <h1>Input Form Handler</h1>
      <input
        type="text"
        value={Data.name}
        placeholder="Enter Your Name"
        name="name"
        onChange={inputHandler}
      />
      <br />
      <br />
      <input
        type="email"
        value={Data.email}
        placeholder="Enter Your Email"
        name="email"
        onChange={inputHandler}
      />
      <br />
      <br />
      <input
        type="number"
        value={Data.phoneNumber}
        placeholder="Enter Your Number"
        name="phoneNumber"
        onChange={inputHandler}
      />
      <br />
      <br />
      <button onClick={clearInput}>Clear</button>

      <div>
        <p>{Data.name}</p>
        <p>{Data.email}</p>

        <p>{Data.phoneNumber}</p>
      </div>
    </div>
  );
}

export default App;
