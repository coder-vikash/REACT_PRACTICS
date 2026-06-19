import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  changeByValue,
} from "../store/features/counterSlice";
import { useState } from "react";

export const Counter = () => {
  const [value, setValue] = useState();

  const state = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(state);

  const handelIncrement = () => {
    dispatch(increment());
  };
  const handelDecrement = () => {
    dispatch(decrement());
  };

  const handleChangeByValue = () => {
    dispatch(changeByValue(value));
  };
  return (
    <div>
      {state.value}
      <button onClick={handelIncrement}>Increment</button>
      <button onClick={handelDecrement}>Decrement</button>
      <input
        type="number"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={handleChangeByValue}>Change by Value</button>
    </div>
  );
};
