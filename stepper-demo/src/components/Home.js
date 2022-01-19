import React from "react";
import classes from "./Home.module.css";
import "antd/dist/antd.css";
import { Button } from "antd";
function Home() {
  return (
    <div>
      <div>
        <h3 className={classes.title}>Albiorix Technology Team</h3>
      </div>
      <div className={classes.btn}>
        <input type="text" placeholder="Search" />

        <Button
          onClick={() => {
            alert("hello");
          }}
          type="primary"
        >
          ADD
        </Button>
      </div>
    </div>
  );
}

export default Home;
