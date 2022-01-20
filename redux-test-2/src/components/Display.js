import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button, Modal, FormControl } from "react-bootstrap";

function Display() {
  const tableData = useSelector((state) => state);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [modelData, setModelData] = useState({});
  const [viewData, setviewData] = useState({});
  const [viewModel, setViewModel] = useState(false);
  const [editModel, setEditModel] = useState(false);

  const editDataHandler = (data) => {
    setModelData(data);
    console.log("mopdel data", modelData);
  };

  const viewModelData = (data) => {
    setviewData(data);
  };

  const editModelHandler = (data) => {
    editDataHandler(data);
    setShow(true);
    setEditModel(true);
    setViewModel(false);
  };

  const viewModelHandler = (data) => {
    viewModelData(data);
    setShow(true);
    setEditModel(false);
    setViewModel(true);
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
            <th>Edit User</th>
            <th>View User</th>
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
                      onClick={() => editModelHandler(data)}
                    >
                      Edit
                    </Button>
                  }
                </td>
                <td>
                  {
                    <Button
                      variant="primary"
                      onClick={() => viewModelHandler(data)}
                    >
                      View
                    </Button>
                  }
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {editModel && (
        <Modal show={show}>
          <Modal.Title>User Information Form</Modal.Title>
          <Modal.Body>
            <Modal.Header>Name</Modal.Header>
            <FormControl
              type="text"
              value={modelData.name}
              onChange={(e) => {
                setModelData({ ...modelData, name: e.target.value });
              }}
            ></FormControl>
            <Modal.Header>Email</Modal.Header>
            <FormControl
              type="text"
              value={modelData.email}
              onChange={(e) => {
                setModelData({ ...modelData, email: e.target.value });
              }}
            ></FormControl>
            <Modal.Header>Phone</Modal.Header>
            <FormControl
              type="text"
              value={modelData.phone}
              onChange={(e) => {
                setModelData({ ...modelData, phone: e.target.value });
              }}
            ></FormControl>
            <Modal.Header>DOB</Modal.Header>
            <FormControl
              type="date"
              value={modelData.date}
              onChange={(e) => {
                setModelData({ ...modelData, date: e.target.value });
              }}
            ></FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={() => {
                dispatch({ type: "EDIT_USER", payload: modelData });
                setShow(false);
              }}
            >
              Submit
            </Button>
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
      {viewModel && (
        <Modal show={show}>
          <Modal.Title>User Information Form</Modal.Title>
          <Modal.Body>
            <Modal.Header>Name</Modal.Header>
            <FormControl type="text" value={viewData.name}></FormControl>
            <Modal.Header>Email</Modal.Header>
            <FormControl type="text" value={viewData.email}></FormControl>
            <Modal.Header>Phone</Modal.Header>
            <FormControl type="text" value={viewData.phone}></FormControl>
            <Modal.Header>DOB</Modal.Header>
            <FormControl type="date" value={viewData.date}></FormControl>
          </Modal.Body>
          <Modal.Footer>
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
