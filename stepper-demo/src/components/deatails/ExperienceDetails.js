import { Box, Button, Icon } from "@mui/material";
import React, { useState } from "react";
import ExperienceDetailForm from "./../experience-form/ExperienceDetailForm";

function ExperienceDetails() {
  const [count, setCount] = useState(0);
  const addExperienceHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="App">
          <h2>Experience Details </h2>
        </div>
        {/* <div>{count === 1 && <ExperienceDetailForm />}</div> */}
        <div>
          {(function () {
            let experienceForm = [];
            for (let i = 1; i <= count; i++) {
              experienceForm.push(<ExperienceDetailForm />);
              return experienceForm;
            }
          })()}
        </div>
        ;
        <div className="App">
          <Button onClick={addExperienceHandler}>
            <Icon baseClassName="fas" className="fa-plus-circle" />
          </Button>
          Add New Experience
        </div>
      </Box>
    </div>
  );
}

export default ExperienceDetails;
