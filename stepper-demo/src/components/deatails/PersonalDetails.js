import React from "react";
import { Typography, TextField, Box } from "@mui/material";

function PersonalDetails({ handleChange, person }) {
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
        <Typography variant="h4">Personal Details</Typography>
        <Typography variant="h5">Profile picture</Typography>
        <TextField type="file" style={{ width: "20%" }} />
      </div>
      <div>
        <TextField
          name="firstNaame"
          defaultValue={person.firstName}
          onChange={handleChange}
          label="First Name"
        />
        <TextField
          name="lastNaame"
          defaultValue={person.lastName}
          onChange={handleChange}
          label="Last Name"
        />
        <TextField
          name="phoneNumber"
          defaultValue={person.phoneNumber}
          onChange={handleChange}
          label="Phone"
        />
        <TextField
          name="email"
          defaultValue={person.email}
          onChange={handleChange}
          label="Email"
        />
        <TextField
          name="dateofBirth"
          onChange={handleChange}
          defaultValue={person.dateOfBirth}
          type="date"
          label="Date of Birth"
        />
      </div>
    </Box>
  );
}
export default PersonalDetails;
