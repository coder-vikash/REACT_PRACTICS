import { useState } from "react";

function App() {
  const [check, setCheck] = useState({
    html: false,
    css: false,
    js: false,
  });

  const HandleChange = (e) => {
    const { name, checked } = e.target;
    setCheck({ ...check, [name]: checked });
  };

  return (
    <div>
      <label htmlFor="html">
        <input
          type="checkbox"
          id="html"
          name="html"
          checked={check.html}
          onChange={HandleChange}
        />
        This is HTML
      </label>
      <br />
      <label htmlFor="css">
        <input
          type="checkbox"
          id="css"
          name="css"
          checked={check.css}
          onChange={HandleChange}
        />
        This is CSS
      </label>
      <br />
      <label htmlFor="js">
        <input
          type="checkbox"
          id="js"
          name="js"
          checked={check.js}
          onChange={HandleChange}
        />
        This is JS
      </label>
      <br />
      <br />

      {check.html && "Html checked"}
      <br />
      {check.css && "css checked"}
      <br />

      {check.js && "Js checked"}
    </div>
  );
}

export default App;
