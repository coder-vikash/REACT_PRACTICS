import { useState } from "react";
import { SingleCheck } from "./component/SingleCheck";
import { GroupCheckBox } from "./component/GroupCheckBox";

function App() {
  const [check, setCheck] = useState({
    html: false,
    css: false,
    js: false,
  });

  return (
    <>
      {/* <SingleCheck check={check} setCheck={setCheck} /> */}
      <GroupCheckBox check={check} setCheck={setCheck} />
    </>
  );
}

export default App;
