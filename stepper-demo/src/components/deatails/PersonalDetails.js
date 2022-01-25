import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { MobileDatePicker } from "@mui/lab/MobileDatePicker";

function PersonalDetails() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "90%" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="App">
        <h2>Personal Details</h2>
        <h4>Profile picture</h4>
        <TextField type="file" style={{ width: "20%" }} />
      </div>
      <div>
        <TextField label="First Name" variant="filled" />
      </div>
      <div>
        <TextField label="Last Name" variant="filled" />
      </div>
      <div>
        <MobileDatePicker label="Date mobile" inputFormat="MM/dd/yyyy" />
      </div>
      <div>
        <TextField label="Phone" variant="filled" />
      </div>
      <div>
        <TextField label="Email" variant="filled" />
      </div>
    </Box>
  );
}
export default PersonalDetails;
