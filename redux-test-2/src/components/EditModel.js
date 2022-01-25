import React, { useState } from "react";
import { Button, Modal, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";

function EditModel({ show, closeModel, user }) {
  const dispatch = useDispatch();

  const [editData, setEditData] = useState(user);
  const [formErrors, setFormErrors] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    let validateRespone = validate(editData);
    setFormErrors(validateRespone.errors);

    if (validateRespone.isValid) {
      dispatch({ type: "UPDATE_USER", payload: editData });
      closeModel();
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

  const modelCloseHandler = () => {
    closeModel();
  };

  return (
    <div>
      <Modal show={show}>
        <Modal.Title>Edit Information Form</Modal.Title>
        <Modal.Body>
          <Modal.Header>Name</Modal.Header>
          <FormControl
            type="text"
            value={editData.name}
            onChange={(e) => {
              setEditData({ ...editData, name: e.target.value });
            }}
          ></FormControl>
          <p>{formErrors.name}</p>
          <Modal.Header>Email</Modal.Header>
          <FormControl
            type="email"
            value={editData.email}
            onChange={(e) => {
              setEditData({ ...editData, email: e.target.value });
            }}
          ></FormControl>
          <p>{formErrors.email}</p>
          <Modal.Header>Phone</Modal.Header>
          <FormControl
            type="tel"
            value={editData.phone}
            onChange={(e) => {
              setEditData({ ...editData, phone: e.target.value });
            }}
          ></FormControl>
          <p>{formErrors.phone}</p>
          <Modal.Header>DOB</Modal.Header>
          <FormControl
            type="date"
            value={editData.date}
            onChange={(e) => {
              setEditData({ ...editData, date: e.target.value });
            }}
          ></FormControl>
          <p>{formErrors.date}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={submitHandler}>Submit</Button>
          <Button onClick={modelCloseHandler}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditModel;
