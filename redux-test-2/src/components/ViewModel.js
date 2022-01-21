import React from "react";
import { Modal, Button, Table } from "react-bootstrap";

function ViewModel({ show, closeModel, user }) {
  const modelCloseHandler = () => {
    closeModel();
  };
  return (
    <div>
      <Modal show={show}>
        <Modal.Title>User Information </Modal.Title>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>Date Of Birth</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.date}</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={modelCloseHandler}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ViewModel;
