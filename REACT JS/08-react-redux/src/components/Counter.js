import React from "react";
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  //   console.log(counter);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <div>
      <h3>welcome to react redux</h3>
      <div>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
