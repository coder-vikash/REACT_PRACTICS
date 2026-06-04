export const SingleCheck = ({ check, setCheck }) => {
  const HandleChanges = (e) => {
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
          onChange={HandleChanges}
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
          onChange={HandleChanges}
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
          onChange={HandleChanges}
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
};
