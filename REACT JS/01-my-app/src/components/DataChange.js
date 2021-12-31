import React, { useState } from "react";

export default function DataChange(props) {
  const [fName, setFNmae] = useState(props.fName);
  const [lName, setLName] = useState(props.lName);
  const [age, setAge] = useState(props.age);

  const handleClick = () => {
    setFNmae("jd");
    setLName("patel");
    setAge(22);
    console.log("clicked!!!!.");
  };
  return (
    <div>
      <div className="changes">
        <p>{fName}</p>
        <p>{lName}</p>
        <p>{age}</p>
        <button onClick={handleClick}>click to change</button>
      </div>
    </div>
  );
}
