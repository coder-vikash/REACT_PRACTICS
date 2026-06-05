import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("");

  const languages = [
    "js",
    "react",
    "node.js",
    "html",
    "css",
    "Mongodb",
    "Tailwintcss",
  ];
  console.log(language);

  return (
    <div>
      <select
        value={language}
        onChange={(e) => {
          setLanguage(e.target.value);
        }}
      >
        <option value="">--Select Languages Mode</option>
        {languages.map((items) => {
          return (
            <option value={items} key={items}>
              {items.toLocaleUpperCase()}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default App;
