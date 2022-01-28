import { Box, TextField, Typography } from "@mui/material";
import React from "react";

function CurrentStatus({ handleChange, person }) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "90%" },
      }}
      noValidate
      // autoComplete="off"
    >
      <div className="App">
        <Typography variant="h4">Current Status </Typography>
      </div>
      <div>
        <TextField
          label="Company"
          defaultValue="Albiorix Technology Private Limited"
          name="companyName"
        />
        <TextField
          label="Designation"
          name="currentDesignation"
          defaultValue={person.currentDesignation}
          onChange={handleChange}
        />
        <TextField
          label="Department"
          name="currentDepartment"
          onChange={handleChange}
          defaultValue={person.currentDepartment}
        />
        <TextField
          type="number"
          name="currentCTC"
          onChange={handleChange}
          defaultValue={person.currentCTC}
          label="CTC"
        />
        <TextField
          type="date"
          name="startWorkingFrom"
          onChange={handleChange}
          defaultValue={person.startWorkingFrom}
          label="Working From"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    </Box>
  );
}

export default CurrentStatus;
