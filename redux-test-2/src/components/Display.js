import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Table, Button } from "react-bootstrap";
import EditModel from "./EditModel";
import ViewModel from "./ViewModel";

function Display() {
  const tableData = useSelector((state) => {
    return state.user;
  });
  const [modelType, setModelType] = useState("");
  const [selectedUserIndex, setSelectedUserIndex] = useState(-1);

  const editModelHandler = (index) => {
    setSelectedUserIndex(index);
    setModelType("editModel");
  };

  const viewModelHandler = (index) => {
    setSelectedUserIndex(index);
    setModelType("viewModel");
  };
  const modelCloseHandler = () => {
    setModelType("");
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
          {tableData.map((data, index) => {
            return (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.date}</td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => editModelHandler(index)}
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => viewModelHandler(index)}
                  >
                    View
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {modelType === "editModel" && (
        <EditModel
          show={modelType === "editModel"}
          closeModel={modelCloseHandler}
          user={tableData[selectedUserIndex]}
        />
      )}
      {modelType === "viewModel" && (
        <ViewModel
          show={modelType === "viewModel"}
          closeModel={modelCloseHandler}
          user={tableData[selectedUserIndex]}
        />
      )}
    </div>
  );
}

export default Display;
