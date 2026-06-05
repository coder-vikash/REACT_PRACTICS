import "./App.css";
import { useRef } from "react";

function App() {
  const divRef = useRef();

  const HandleChange = () => {
    divRef.current.style.backgroundColor = "green";
    divRef.current.style.borderRadius = "100%";
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">This is div</h1>

      <div
        ref={divRef}
        className="w-40 h-40 bg-red-600 text-white rounded-2xl  flex items-center justify-center text-center  text-lg "
      >
        This is the div
      </div>
      <button
        onClick={HandleChange}
        className="border-2 black mt-5 font-bold p-2 bg-green-500 text-xl cursor-pointer"
      >
        Click me
      </button>
    </div>
  );
}

export default App;
