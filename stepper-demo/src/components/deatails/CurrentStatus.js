import { Box, TextField } from "@mui/material";
import React from "react";

function CurrentStatus() {
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
          <h2>Current Status </h2>
        </div>
        <div>
          <TextField
            label="Company"
            defaultValue="Albiorix Technology Private Limited"
            variant="filled"
          />
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
          <TextField type="date" label="Working Form" variant="filled" />
        </div>
      </Box>
    </div>
  );
}

export default CurrentStatus;
