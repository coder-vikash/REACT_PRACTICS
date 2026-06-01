import { useState } from "react";
import "./App.css";

import { ColorBox } from "./ColorBox";

function App() {
  const colors = [
    "red",
    "blue",
    "black",
    "orange",
    "yellow",
    "tomato",
    "Pink",
    "gray",
  ];

  const [selectedColor, setSelectedColor] = useState("transparent");

  return (
    <div className="flex flex-col items-center py-16 text-center text-2xl font-bold gap-6">
      <h1 className="mb-6">🎨 Color Changer</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {colors.map((item, index) => (
          <button
            key={index}
            style={{ backgroundColor: item }}
            className="px-6 py-2 rounded-lg text-white shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer"
            onClick={() => setSelectedColor(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <ColorBox color={selectedColor} />
    </div>
  );
}

export default App;
