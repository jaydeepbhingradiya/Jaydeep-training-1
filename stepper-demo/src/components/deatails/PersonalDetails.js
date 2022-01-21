import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function PersonalDetails() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <div className="App">
          <h2>Personal Details</h2>
        </div>
        <TextField error id="outlined-error" label="Error" />
        <TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          helperText="Incorrect entry."
        />
      </div>
      <div>
        <TextField error id="filled-error" label="Error" variant="filled" />
        <TextField
          error
          id="filled-error-helper-text"
          label="Error"
          helperText="Incorrect entry."
          variant="filled"
        />
      </div>
      <div>
        <TextField
          error
          id="standard-error"
          label="Error"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          error
          id="standard-error-helper-text"
          label="Error"
          helperText="Incorrect entry."
          variant="standard"
        />
      </div>
    </Box>
  );
}
export default PersonalDetails;
