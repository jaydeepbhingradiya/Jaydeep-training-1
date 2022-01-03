import { Fragment } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <Fragment>
        <Form />
        <Table />
      </Fragment>
    </div>
  );
}

export default App;
