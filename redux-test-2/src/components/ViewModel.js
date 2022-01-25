import React from "react";
import { Modal, Button } from "react-bootstrap";

function ViewModel({ show, closeModel, user }) {
  const modelCloseHandler = () => {
    closeModel();
  };
  return (
    <div>
      <Modal show={show}>
        <Modal.Title>User Information </Modal.Title>
        <div className="row">
          <div className="col-md-10 p-5 mx-auto shadow">
            <ul className="list-group">
              <li className="list-group-item">{user.name}</li>
              <li className="list-group-item">{user.email}</li>
              <li className="list-group-item">{user.phone}</li>
              <li className="list-group-item">{user.date}</li>
            </ul>
          </div>
        </div>
        <Modal.Footer>
          <Button onClick={modelCloseHandler}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ViewModel;
