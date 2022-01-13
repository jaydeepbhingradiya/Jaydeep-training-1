import React, { useState } from "react";
import Backdrop from "./Backdrop";
import Model from "./Model";

function Todo() {
  const [modelIsOpen, setModelIsOpen] = useState(false);
  const deleteHandler = () => {
    setModelIsOpen(true);
  };
  const closeModleHandler = () => {
    setModelIsOpen(false);
  };
  return (
    <div className="card">
      <h2>TITLE</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modelIsOpen && <Model onClick={closeModleHandler} />}
      {modelIsOpen && <Backdrop onClick={closeModleHandler} />}
    </div>
  );
}

export default Todo;
