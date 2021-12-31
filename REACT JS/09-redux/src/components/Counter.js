import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

function Counter() {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increseHandler = () => {
    dispatch(counterActions.increase(5));
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  return (
    <div className="App">
      <h1>Redux Counter</h1>
      {show && (
        <div>
          <h3>{counter}</h3>
          <button onClick={incrementHandler}>+++</button>
          <button onClick={increseHandler}>+5+</button>
          <button onClick={decrementHandler}>---</button>
        </div>
      )}
      <button onClick={toggleCounterHandler}>toggle counter</button>
    </div>
  );
}

export default Counter;
