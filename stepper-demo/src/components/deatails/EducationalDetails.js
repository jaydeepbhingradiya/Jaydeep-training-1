import React, { useState } from "react";
import { Box, Button, Icon, Typography } from "@mui/material";
import EducatonDetailForm from "./../education-form/EducatonDetailForm";
function EducationalDetails() {
  const [count, setCount] = useState(0);
  const addEducationHandler = () => {
    setCount(count + 1);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="App">
        <Typography variant="h4">Educaton Details </Typography>
      </div>
      <div>
        {(function () {
          let educationForm = [];
          for (let i = 1; i <= count; i++) {
            educationForm.push(<EducatonDetailForm />);
          }
          return educationForm;
        })()}
      </div>
      <div className="App">
        <Button onClick={addEducationHandler}>
          <Icon baseClassName="fas" className="fa-plus-circle" />
        </Button>
        Add New Experience
      </div>
    </Box>
  );
}

export default EducationalDetails;
