import React from "react";
import { Box, Button, Paper, TextField } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

function ExperienceDetailForm({
  removeForm,
  handleChange,
  experienceDetails,
  index,
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
            name="previousCompanyName"
            defaultValue={experienceDetails.previousCompanyName}
            onChange={(e) => {
              handleChange(index, "previousCompanyName", e.target.value);
            }}
            label="Company"
          />
          <TextField
            name="previousCompanyDesignation"
            defaultValue={experienceDetails.previousCompanyDesignation}
            onChange={(e) => {
              handleChange(index, "previousCompanyDesignation", e.target.value);
            }}
            label="Designation"
          />
          <TextField
            name="previousCompanyDepartment"
            defaultValue={experienceDetails.previousCompanyDepartment}
            onChange={(e) => {
              handleChange(index, "previousCompanyDepartment", e.target.value);
            }}
            label="Department"
          />
          <TextField
            name="previousCompanyCTC"
            defaultValue={experienceDetails.previousCompanyCTC}
            onChange={(e) => {
              handleChange(index, "previousCompanyCTC", e.target.value);
            }}
            type="number"
            label="CTC"
          />
          <TextField
            name="previousCompanyStartDate"
            defaultValue={experienceDetails.previousCompanyStartDate}
            onChange={(e) => {
              handleChange(index, "previousCompanyStartDate", e.target.value);
            }}
            type="date"
            label=" Form"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            name="previousCompanyLeaveDate"
            defaultValue={experienceDetails.previousCompanyLeaveDate}
            onChange={(e) => {
              handleChange(index, "previousCompanyLeaveDate", e.target.value);
            }}
            type="date"
            label=" to"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </Paper>
    </Box>
  );
}

export default ExperienceDetailForm;
