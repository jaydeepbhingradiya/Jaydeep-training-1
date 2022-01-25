import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, FormControl } from "react-bootstrap";

function Form() {
  const initialValues = { name: "", email: "", phone: "", date: "" };

  const [show, setShow] = useState(false);
  const [userInfo, setUserInfo] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const dispatch = useDispatch();

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
    let validateRespone = validate(userInfo);
    setFormErrors(validateRespone.errors);

    if (validateRespone.isValid) {
      dispatch({
        type: "ADD_USER",
        payload: { ...userInfo, id: Math.random().toString() },
      });
      setShow(false);
      setUserInfo({ name: "", email: "", phone: "", date: "" });
    }
  };

  const validate = (values) => {
    let errors = {};
    let errorCount = 0;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "name is required!";
      errorCount++;
    }
    if (!values.email) {
      errors.email = "email is required!";
      errorCount++;
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
      errorCount++;
    }
    if (!values.phone) {
      errors.phone = "phone number is required";
      errorCount++;
    } else if (values.phone.length !== 10) {
      errors.phone = "phone number must be 10 characters";
      errorCount++;
    }
    if (!values.date) {
      errors.date = "date is required!";
      errorCount++;
    }
    return {
      errors: errors,
      isValid: errorCount <= 0,
    };
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
          <p>{formErrors.name}</p>
          <Modal.Header>Email</Modal.Header>
          <FormControl
            type="email"
            name="email"
            value={userInfo.email}
            onChange={changeHandler}
          ></FormControl>
          <p>{formErrors.email}</p>

          <Modal.Header>Phone</Modal.Header>
          <FormControl
            type="tel"
            name="phone"
            value={userInfo.phone}
            onChange={changeHandler}
          ></FormControl>
          <p>{formErrors.phone}</p>

          <Modal.Header>DOB</Modal.Header>
          <FormControl
            type="date"
            name="date"
            value={userInfo.date}
            onChange={changeHandler}
          ></FormControl>
          <p>{formErrors.date}</p>
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
