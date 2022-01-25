import { Box, TextField } from "@mui/material";
import React from "react";

function ExperienceDetailForm() {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "80%" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="App">
          <div>
            <TextField label="Company" variant="filled" />
          </div>
          <div>
            <TextField label="Designation" variant="filled" />
          </div>
          <div>
            <TextField label="Department" variant="filled" />
          </div>
          <div>
            <TextField type="number" label="CTC" variant="filled" />
          </div>
          <div>
            <TextField type="date" label=" Form" variant="filled" />
          </div>
          <div>
            <TextField type="date" label=" to" variant="filled" />
          </div>
        </div>
      </Box>
    </div>
  );
}

export default ExperienceDetailForm;
