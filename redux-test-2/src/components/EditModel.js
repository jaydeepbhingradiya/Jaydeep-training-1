import React, { useState } from "react";
import { Button, Modal, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";

function EditModel({ show, closeModel, user }) {
  const [editData, setEditData] = useState(user);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_USER", payload: editData });
    closeModel("");
  };

  const modelCloseHandler = () => {
    closeModel();
  };

  return (
    <div>
      <Modal show={show}>
        <Modal.Title>User Information Form</Modal.Title>
        <Modal.Body>
          <Modal.Header>Name</Modal.Header>
          <FormControl
            type="text"
            value={editData.name}
            onChange={(e) => {
              setEditData({ ...editData, name: e.target.value });
            }}
          ></FormControl>
          <Modal.Header>Email</Modal.Header>
          <FormControl
            type="email"
            value={editData.email}
            onChange={(e) => {
              setEditData({ ...editData, email: e.target.value });
            }}
          ></FormControl>
          <Modal.Header>Phone</Modal.Header>
          <FormControl
            type="tel"
            value={editData.phone}
            onChange={(e) => {
              setEditData({ ...editData, phone: e.target.value });
            }}
          ></FormControl>
          <Modal.Header>DOB</Modal.Header>
          <FormControl
            type="date"
            value={editData.date}
            onChange={(e) => {
              setEditData({ ...editData, date: e.target.value });
            }}
          ></FormControl>
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
