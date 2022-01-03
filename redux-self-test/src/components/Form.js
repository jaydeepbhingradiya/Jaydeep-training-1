import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { formAction } from "../store/formSlice";

export default function Form(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      formAction.submitHandler({
        name,
        email,
        number,
        address,
        id: Math.random().toString(),
      })
    );
    // setName("");
    // setEmail("");
    // setNumber("");
    // setAddress("");
  };

  return (
    <>
      <div className="form">
        <h1>Enter your details</h1>
        <form name="contactform" onSubmit={submitHandler}>
          <div>
            <fieldset>
              <input
                onChange={(e) => setName(e.target.value)}
                name="name"
                value={name}
                type="text"
                size="30"
                placeholder="Name"
              />
              <br />

              <input
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                value={email}
                type="text"
                size="30"
                placeholder="Email"
              />
              <br />

              <input
                onChange={(e) => setNumber(e.target.value)}
                name="phone"
                value={number}
                type="text"
                size="30"
                placeholder="Phone"
              />
              <br />

              <input
                onChange={(e) => setAddress(e.target.value)}
                name="address"
                value={address}
                type="text"
                size="30"
                placeholder="Address"
              />
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
