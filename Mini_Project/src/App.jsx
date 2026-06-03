import { useState } from "react";
import "./App.css";
import { Popup } from "./component/Popup";

function App() {
  const [popup, setPopup] = useState(false); // ✅ lowercase variable name

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <button
          onClick={() => {
            setPopup(true);
          }}
          className="bg-black text-white cursor-pointer text-2xl p-3 rounded"
        >
          Click me
        </button>
      </div>
      {/* ✅ pass correct props */}
      <Popup Popup={popup} setPopup={setPopup} />
    </>
  );
}

export default App;
