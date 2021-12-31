import React, { useState } from "react";

export default function Form(props) {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [age, setAge] = useState("");

  const fNameChange = (e) => {
    setFName(e.target.value);
  };

  const lNameChange = (e) => {
    setLName(e.target.value);
  };

  const ageChange = (e) => {
    setAge(e.target.value);
  };

  const submitHendler = (e) => {
    e.preventDefault();
    const data = {
      name: fName,
      sName: lName,
      age: age,
    };

    props.onSaveData(data);
    // console.log(data);
  };

  return (
    <form onSubmit={submitHendler}>
      <div>
        <lable>First Name :</lable>
        <input type="text" onChange={fNameChange}></input>
      </div>
      <div>
        <lable>Last Name :</lable>
        <input type="text" onChange={lNameChange}></input>
      </div>
      <div>
        <lable> Age :</lable>
        <input type="number" onChange={ageChange}></input>
        <br></br>
        <button type="submit">SUBMIT</button>
      </div>
    </form>
  );
}
