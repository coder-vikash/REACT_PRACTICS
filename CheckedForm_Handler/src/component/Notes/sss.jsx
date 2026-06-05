// import { useState } from "react";
// import { SingleCheck } from "./component/SingleCheck";
// import { BasicRadioBtn } from "./component/BasicRadioBtn";
// import { GroupCheckBox } from "./component/GroupCheckBox";
import { GroupRadioBtn } from "./component/GroupRadioBtn";

function App() {
  // const [check, setCheck] = useState({
  //   html: false,
  //   css: false,
  //   js: false,
  // });

  //For check radio button
  // const [gender, setGender] = useState("other");
  // console.log(gender);
  return (
    <>
      {/* This is single Check box */}
      {/* <SingleCheck check={check} setCheck={setCheck} /> */}
      {/* Group Check Box */}
      {/* <GroupCheckBox check={check} setCheck={setCheck} /> */}

      {/* This is Radio Btn */}
      {/* <BasicRadioBtn gender={gender} setGender={setGender} /> */}

      <GroupRadioBtn />
    </>
  );
}

export default App;
