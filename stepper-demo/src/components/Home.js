import React, { useState } from "react";
import classes from "./Home.module.css";
import "antd/dist/antd.css";
import { Button } from "antd";
import Steps from "./Steps";

function Home() {
  const [showSteps, setShowSteps] = useState(false);

  const stepHandler = () => {
    setShowSteps(true);
  };
  return (
    <div>
      <div>
        <h3 className={classes.title}>Albiorix Technology Team</h3>
      </div>
      <div className={classes.btn}>
        <input type="text" placeholder="Search" />

        <Button onClick={stepHandler} type="primary">
          ADD
        </Button>
      </div>
      {showSteps && <Steps />}
    </div>
  );
}

export default Home;
