import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, FormControl } from "react-bootstrap";

function Form() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
  });

  const showModelHandler = () => {
    setShow(true);
  };

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("form data", userInfo);
    dispatch({
      type: "ADD_USER",
      payload: { ...userInfo, id: Math.random().toString() },
    });
    setUserInfo({ name: "", email: "", phone: "", date: "" });
    setShow(false);
  };

  const closeModelHandler = () => {
    setShow(false);
  };

  return (
    <div>
      <Button variant="success" onClick={showModelHandler}>
        Add Your Details
      </Button>
      <Modal show={show}>
        <Modal.Title>User Information Form</Modal.Title>
        <Modal.Body>
          <Modal.Header>Name</Modal.Header>
          <FormControl
            type="text"
            name="name"
            value={userInfo.name}
            onChange={changeHandler}
          ></FormControl>
          <Modal.Header>Email</Modal.Header>
          <FormControl
            type="text"
            name="email"
            value={userInfo.email}
            onChange={changeHandler}
          ></FormControl>
          <Modal.Header>Phone</Modal.Header>
          <FormControl
            type="text"
            name="phone"
            value={userInfo.phone}
            onChange={changeHandler}
          ></FormControl>
          <Modal.Header>DOB</Modal.Header>
          <FormControl
            type="date"
            name="date"
            value={userInfo.date}
            onChange={changeHandler}
          ></FormControl>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={submitHandler}>Submit</Button>
          <Button onClick={closeModelHandler}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Form;
