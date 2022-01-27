import "./App.css";
import "antd/dist/antd.css";
import Home from "./components/Home";
import List from "./components/List";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Home />
      <List />
    </React.Fragment>
  );
}

export default App;
