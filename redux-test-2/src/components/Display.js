import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Table, Button, Modal, FormControl } from "react-bootstrap";

function Display() {
  const tableData = useSelector((state) => state);

  const [show, setShow] = useState(false);
  const [modelData, setModelData] = useState({});

  const editDataHandler = (data) => {
    // console.log("click", data);
    setModelData(data);
    console.log("mopdel data", modelData);
  };

  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>DOB</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.date}</td>
                <td>
                  {
                    <Button
                      variant="primary"
                      onClick={() => {
                        editDataHandler(data);
                        setShow(true);
                      }}
                    >
                      Edit
                    </Button>
                  }
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {Object.keys(modelData).length !== 0 && (
        <Modal show={show}>
          <Modal.Title>User Information Form</Modal.Title>
          <Modal.Body>
            <Modal.Header>Name</Modal.Header>
            <FormControl type="text" value={modelData.name}></FormControl>
            <Modal.Header>Email</Modal.Header>
            <FormControl type="text" value={modelData.email}></FormControl>
            <Modal.Header>Phone</Modal.Header>
            <FormControl type="text" value={modelData.phone}></FormControl>
            <Modal.Header>DOB</Modal.Header>
            <FormControl type="date" value={modelData.date}></FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button>Submit</Button>
            <Button
              onClick={() => {
                setShow(false);
                setModelData({});
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default Display;
