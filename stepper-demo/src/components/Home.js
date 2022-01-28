import React, { useState } from "react";
import classes from "./Home.module.css";
import { Typography, Button } from "@mui/material";
import Steps from "./Steps";

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

            <Button variant="contained" onClick={stepHandler}>
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
