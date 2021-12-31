import React, { useState } from "react";
import Form from "./Form";
import "./demo.css";
import Table from "./Table";
// import DataChange from "./DataChange";

export default function Demo() {
  const [formData, setFormData] = useState(null);
  // console.log(formData);
  const saveDataHendler = (data) => {
    // console.log(data);
    const expenseData = { ...data, id: Math.random().toString() };
    setFormData(expenseData);
  };
  return (
    <div className="demo-container">
      <div>
        {/* <DataChange></DataChange> */}
        <Form onSaveData={saveDataHendler}></Form>
        <Table Data={formData}></Table>
      </div>
    </div>
  );
}
