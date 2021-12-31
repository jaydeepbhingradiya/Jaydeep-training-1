import React from "react";
import Demo from "./Demo";
import ExpandDate from "./ExpandDate";

export default function UserInput() {
  const fName = "jaydeep";
  const lName = " bhingradiya";
  const age = 21;
  const date = Date(2021, 12, 13);
  return (
    <div>
      <h1> Welcome to React JS Tutorial </h1>
      <ExpandDate date={date} />
      <div className="container">
        <Demo fName={fName} lName={lName} age={age}></Demo>
      </div>
    </div>
  );
}
