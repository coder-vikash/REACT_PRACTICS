import { useState } from "react";

function App() {
  const [check, setCheck] = useState({
    html: false,
    css: false,
    js: false,
  });

  return (
    <div>
      <label htmlFor="html">
        <input
          type="checkbox"
          id="html"
          checked={check.html}
          onChange={(e) => setCheck({ ...check, html: e.target.checked })}
        />
        This is HTML
      </label>
      <br />
      <label htmlFor="css">
        <input
          type="checkbox"
          id="css"
          checked={check.css}
          onChange={(e) => setCheck({ ...check, css: e.target.checked })}
        />
        This is CSS
      </label>
      <br />
      <label htmlFor="js">
        <input
          type="checkbox"
          id="js"
          checked={check.js}
          onChange={(e) => setCheck({ ...check, js: e.target.checked })}
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
