import React from "react";

import "./Card.css";

const Card = (props) => {
  const { style, children } = props;
  return (
    <div className="card" style={style}>
      {children}
    </div>
  );
};

export default Card;
