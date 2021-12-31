// import React, { useState } from "react";

// export default function Counter() {
//   const [count, setCount] = useState(0);

//   const countIncrement = () => {
//     setCount(count + 1);
//   };

//   const countDecrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <h2>REACT JS is fun...!</h2>
//       <h4>Counter</h4>
//       <button onClick={countDecrement}>--</button>
//       <p>{count}</p>
//       <button onClick={countIncrement}>++</button>
//     </div>
//   );
// }

import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }

  if (action.type === "DECREMENT") {
    return state - 1;
  }
  return state;
};

function Counter() {
  const [state, dispath] = useReducer(reducer, initialState);
  return (
    <div>
      <button onClick={() => dispath({ type: "INCREMENT" })}>++</button>
      <p>{state}</p>
      <button onClick={() => dispath({ type: "DECREMENT" })}>--</button>
    </div>
  );
}

export default Counter;
