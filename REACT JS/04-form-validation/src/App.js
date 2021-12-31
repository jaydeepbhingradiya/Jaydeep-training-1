import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [formData, setFormData] = useState([]);

  const saveDataHendler = (data) => {
    setFormData({ ...data, id: Math.random().toString() });
   };

  return (
    <div className="App">
      <div className="compo">
        <Card>
          <Form onSaveData={saveDataHendler} />
          <Table newData={formData}></Table>
        </Card>
      </div>
    </div>
  );
}

export default App;
