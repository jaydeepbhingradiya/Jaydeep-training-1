import React from "react";

function Model(props) {
  const closeHandler = () => {
    props.onClick();
  };
  return (
    <div className="modal">
      <p>Are you sure??</p>
      <button className="btn btn--alt" onClick={closeHandler}>
        cancel
      </button>
      <button className="btn" onClick={closeHandler}>
        confirm
      </button>
    </div>
  );
}

export default Model;
