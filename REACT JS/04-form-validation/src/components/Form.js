import React, { useState } from "react";
import "./form.css";
export default function Form(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

  const [nameErr, setNameErr] = useState({});
  const [emailErr, setEmailErr] = useState({});
  const [numberErr, setNumberErr] = useState({});
  const [addressErr, setAddressErr] = useState({});
  const [userData, setUserData] = useState([]);

  const nameChnageHendler = (e) => {
    setName(e.target.value);
  };
  const emailChnageHendler = (e) => {
    setEmail(e.target.value);
  };

  const numberChnageHendler = (e) => {
    setNumber(e.target.value);
  };

  const addressChnageHendler = (e) => {
    setAddress(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    const user = {
      name: name,
      email: email,
      number: number,
      address: address,
    };

    props.onSaveData(user);

    // setUserData(...userData, user);
    // props.onSaveData(userData);

    // console.log(userData);

    // localStorage.setItem("Form Data", JSON.stringify(...userData, user));

    setName("");
    setEmail("");
    setNumber("");
    setAddress("");
  };

  const formValidation = () => {
    const nameErr = {};
    const emailErr = {};
    const numberErr = {};
    const addressErr = {};
    let isValid = true;

    if (name.trim().length <= 5) {
      nameErr.namelong = "name length must be 5 characters ";
      isValid = false;
    }
    if (!email.includes("@")) {
      emailErr.emailAddress = "invalid email address";
      isValid = false;
    }
    if (number.trim().length !== 10) {
      numberErr.numberLength = "phone number is invalid";
      isValid = false;
    }
    if (address.trim().length <= 0) {
      addressErr.addressEmpty = "address is compulsory";
      isValid = false;
    }
    setNameErr(nameErr);
    setEmailErr(emailErr);
    setNumberErr(numberErr);
    setAddressErr(addressErr);
    return isValid;
  };
  return (
    <>
      <div className="form">
        <h3>Enter your details</h3>
        <form name="contactform" onSubmit={submitHandler}>
          <div>
            <fieldset>
              <input
                onChange={nameChnageHendler}
                name="name"
                value={name}
                type="text"
                size="30"
                placeholder="Name"
              />
              <br />

              <input
                onChange={emailChnageHendler}
                name="email"
                value={email}
                type="text"
                size="30"
                placeholder="Email"
              />
              <br />

              <input
                onChange={numberChnageHendler}
                name="phone"
                value={number}
                type="text"
                size="30"
                placeholder="Phone"
              />
              <br />

              <input
                onChange={addressChnageHendler}
                name="address"
                value={address}
                type="text"
                size="30"
                placeholder="Address"
              />
              <br />
              {Object.keys(nameErr).map((keys) => {
                return <div style={{ color: "red" }}>{nameErr[keys]}</div>;
              })}

              {Object.keys(emailErr).map((keys) => {
                return <div style={{ color: "red" }}>{emailErr[keys]}</div>;
              })}

              {Object.keys(numberErr).map((keys) => {
                return <div style={{ color: "red" }}>{numberErr[keys]}</div>;
              })}

              {Object.keys(addressErr).map((keys) => {
                return <div style={{ color: "red" }}>{addressErr[keys]}</div>;
              })}
              <br />

              <button
                className="btn"
                disabled={!name || !email || !number || !address}
                id="submit"
                value="Submit"
              >
                Submit
              </button>
              <br />
            </fieldset>
          </div>
        </form>
      </div>
    </>
  );
}
