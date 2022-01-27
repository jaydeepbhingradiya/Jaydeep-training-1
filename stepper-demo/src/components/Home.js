import React, { useState } from "react";
import classes from "./Home.module.css";
import "antd/dist/antd.css";
import { Button } from "antd";
import Steps from "./Steps";
import { Typography } from "@mui/material";

function Home() {
  const [showSteps, setShowSteps] = useState(false);

  const stepHandler = () => {
    setShowSteps(true);
  };
  return (
    <React.Fragment>
      {!showSteps && (
        <div>
          <div>
            <Typography className={classes.title} variant="h4">
              Albiorix Technology Team
            </Typography>
          </div>
          <div className={classes.btn}>
            <input type="text" placeholder="Search" />

            <Button onClick={stepHandler} type="primary">
              ADD
            </Button>
          </div>
        </div>
      )}
      <div>{showSteps && <Steps />}</div>
    </React.Fragment>
  );
}

export default Home;
