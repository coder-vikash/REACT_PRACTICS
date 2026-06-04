// export const GroupCheckBox = ({ check, setCheck }) => {
//   const HandleChanges = (e) => {
//     const { name, checked } = e.target;
//     setCheck({ ...check, [name]: checked });
//   };
//   return (
//     <div>
//       <label htmlFor="html">
//         <input
//           type="checkbox"
//           id="html"
//           name="html"
//           checked={check.html}
//           onChange={HandleChanges}
//         />
//         This is HTML
//       </label>
//       <br />
//       <label htmlFor="css">
//         <input
//           type="checkbox"
//           id="css"
//           name="css"
//           checked={check.css}
//           onChange={HandleChanges}
//         />
//         This is CSS
//       </label>
//       <br />
//       <label htmlFor="js">
//         <input
//           type="checkbox"
//           id="js"
//           name="js"
//           checked={check.js}
//           onChange={HandleChanges}
//         />
//         This is JS
//       </label>
//       <br />
//       <br />

//       {check.html && "Html checked"}
//       <br />
//       {check.css && "css checked"}
//       <br />

//       {check.js && "Js checked"}
//     </div>
//   );
// };

export const GroupCheckBox = ({ check, setCheck }) => {
  const HandleChange = (e) => {
    const { name, checked } = e.target;
    setCheck({ ...check, [name]: checked });
  };

  // Check if all are selected
  const isAllSelected = Object.values(check).every(Boolean);

  // Handle Select All
  const handleSelectAll = (e) => {
    const { checked } = e.target;
    setCheck({
      html: checked,
      css: checked,
      js: checked,
    });
  };

  return (
    <div>
      <label htmlFor="all">
        <input
          type="checkbox"
          id="all"
          name="all"
          checked={isAllSelected}
          onChange={handleSelectAll}
        />
        Select All
      </label>
      <br />

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
      {check.css && "Css checked"}
      <br />
      {check.js && "Js checked"}
    </div>
  );
};
