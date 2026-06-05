

export const BasicRadioBtn = ({gender,setGender}) => {
  return (
    <><label htmlFor="male">
        <input
          type="radio"
          name="General"
          value="Male"
          id="male"
          checked={gender === "Male"}
          onChange={(e) => setGender(e.target.value)}
        />{" "}
        Male
      </label>
      <br />

      <label htmlFor="female">
        <input
          type="radio"
          name="General"
          id="female"
          value="Female"
          checked={gender === "Female"}
          onChange={(e) => setGender(e.target.value)}
        />{" "}
        Female
      </label>
      <br />

      <label htmlFor="other">
        <input
          type="radio"
          name="General"
          id="other"
          value="Other"
          checked={gender === "Other"}
          onChange={(e) => setGender(e.target.value)}
        />{" "}
        Others
      </label></>
  )
}
