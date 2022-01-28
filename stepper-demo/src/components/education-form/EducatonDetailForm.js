import React from "react";
import { Box, TextField, Paper, Button } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

function EducatonDetailForm({
  removeForm,
  educationalDetails,
  index,
  handleChange,
}) {
  const removeFormHandler = () => {
    removeForm();
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "80%" },
      }}
      noValidate
      // autoComplete="off"
    >
      <Paper className="paper" elevation={3}>
        <div className="cls-btn">
          <Button onClick={removeFormHandler}>
            <CancelIcon sx={{ color: "red" }} />
          </Button>
        </div>
        <div className="App">
          <TextField
            label="Course"
            name="course"
            defaultValue={educationalDetails.course}
            onChange={(e) => {
              handleChange(index, "previousCompanyName", e.target.value);
            }}
          />
          <TextField
            label="Univercity"
            name="univercity"
            defaultValue={educationalDetails.univercity}
            onChange={(e) => {
              handleChange(index, "previousCompanyName", e.target.value);
            }}
          />
          <TextField
            type="date"
            label=" Pass on"
            name="educationPassOut"
            defaultValue={educationalDetails.educationPassOut}
            onChange={(e) => {
              handleChange(index, "previousCompanyName", e.target.value);
            }}
          />
          <TextField
            label=" Grade"
            name="grade"
            defaultValue={educationalDetails.grade}
            onChange={(e) => {
              handleChange(index, "previousCompanyName", e.target.value);
            }}
          />
        </div>
      </Paper>
    </Box>
  );
}

export default EducatonDetailForm;
