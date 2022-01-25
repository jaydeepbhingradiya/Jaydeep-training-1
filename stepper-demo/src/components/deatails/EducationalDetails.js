import { Box, Button, Icon } from "@mui/material";
import React, { useState } from "react";
import EducatonDetailForm from "./../education-form/EducatonDetailForm";

function EducationalDetails() {
  const [count, setCount] = useState(0);
  const addEducationHandler = () => {
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
          <h2>Educaton Details </h2>
        </div>
        <div>{count === 1 && <EducatonDetailForm />}</div>
        <div className="App">
          <Button onClick={addEducationHandler}>
            <Icon baseClassName="fas" className="fa-plus-circle" />
          </Button>
          Add New Experience
        </div>
      </Box>
    </div>
  );
}

export default EducationalDetails;
