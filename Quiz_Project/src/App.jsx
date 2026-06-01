import { useState } from "react";
import "./App.css";
import { Question } from "./component/Question";
import { Timer } from "./component/Timer";
import { Result } from "./component/Result";

function App() {
  const [isOver, setIsOver] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <>
      {/* Pass the setter function, not the boolean */}
      <Timer setIsOver={setIsOver} />
      {isOver ? (
        <Result score={score} />
      ) : (
        <Question setIsOver={setIsOver} setScore={setScore} />
      )}
    </>
  );
}

export default App;
