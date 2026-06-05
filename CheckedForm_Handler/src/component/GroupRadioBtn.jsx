import { useState } from "react";

export const GroupRadioBtn = () => {
  const gender = ["Male", "Female", "Other"];
  const [selectedGender, setGender] = useState("");
  console.log(selectedGender);

  return (
    <>
      {gender.map((items) => (
        <label key={items} htmlFor={items}>
          <br />
          <input
            type="radio"
            name="gender"
            value={items}
            id={items}
            checked={selectedGender === items}
            onChange={(e) => setGender(e.target.value)}
          />
          {items}
        </label>
      ))}
      <p>{selectedGender}</p>
    </>
  );
};
