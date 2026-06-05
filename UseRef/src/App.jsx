import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharacterAllowed, setIsCharacterAllowed] = useState(false);

  const [savePassword, setSavePassword] = useState([]);

  const passwordRef = useRef(null);

  const GeneratePassword = () => {
    let pass = "";
    let str = "abcdefghijklmopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWZYZ";

    if (isNumberAllowed) str += "123456789";
    if (isCharacterAllowed) str += "@#$%&*~";

    for (let i = 0; i <= length; i++) {
      let randomIndex = Math.floor(Math.random() * str.length);
      let CharacterPicker = str.charAt(randomIndex);
      pass += CharacterPicker;
    }
    setPassword(pass);
  };

  useEffect(() => {
    GeneratePassword();
  }, [length, isNumberAllowed, isCharacterAllowed]);

  const copyPasswordToClipBoard = () => {
    navigator.clipboard.writeText(password);
    passwordRef.current.select();
  };

  return (
    <>
      <div className="flex flex-col max-w-[30rem] m-auto gap-5">
        <h1 className="text-center mt-5 font-bold">Password Generator</h1>

        <input
          type="text"
          placeholder="Password"
          readOnly={true}
          id="pasword"
          ref={passwordRef}
          value={password}
          className="outliner-none border-none bg-gray-400 text-white py-1 rounded-lg"
        />
        <input
          type="range"
          min={0}
          max={100}
          name=""
          id=""
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <label htmlFor="numberAllow">
          <input
            type="checkbox"
            id="numberAllow"
            checked={isNumberAllowed}
            value={isNumberAllowed}
            onChange={(e) => {
              setIsNumberAllowed(e.target.checked);
            }}
          />
          Number Allow
        </label>
        <label htmlFor="charAllow">
          <input
            type="checkbox"
            id="charAllow"
            checked={isCharacterAllowed}
            value={isCharacterAllowed}
            onChange={(e) => {
              setIsCharacterAllowed(e.target.checked);
            }}
          />
          Character Allow
        </label>
        <button
          onClick={copyPasswordToClipBoard}
          className="bg-blue-500 py-2 rounded-xl px-1 cursor-pointer"
        >
          Copy Password
        </button>
        <button
          onClick={() => {
            setPassword("");
          }}
          className="bg-blue-500 py-2 rounded-xl px-1 cursor-pointer"
        >
          Reset Password
        </button>
        <button
          onClick={() => {
            setSavePassword([...savePassword, password]);
          }}
          className="bg-blue-500 py-2 rounded-xl px-1 cursor-pointer"
        >
          Save Password
        </button>
        {savePassword.map((items) => {
          return <p>{items} </p>;
        })}
      </div>
    </>
  );
}

export default App;
