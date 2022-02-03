import React, { useState } from "react";
import classes from "./Home.module.css";
import { Typography, Button, TextField } from "@mui/material";
import Steps from "./Steps";
import List from "./List";

function Home() {
  const [showSteps, setShowSteps] = useState(false);

  const stepHandler = () => {
    setShowSteps(true);
  };

  const showListHandler = () => {
    setShowSteps(false);
  };
  return (
    <React.Fragment>
      {!showSteps && (
        <div>
          <Typography className={classes.title} variant="h4">
            Albiorix Technology Team
          </Typography>

          <div className={classes.btn}>
            <TextField name="sreach" label=" sreach" />

            <Button variant="contained" onClick={stepHandler}>
              ADD
            </Button>
          </div>
          <div className="table">
            <List />
          </div>
        </div>
      )}
      <div>{showSteps && <Steps showList={showListHandler} />}</div>
    </React.Fragment>
  );
}

export default Home;
