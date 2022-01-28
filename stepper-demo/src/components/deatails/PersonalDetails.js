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
          name="firstName"
          onChange={handleChange}
          defaultValue={person.firstName}
          label="First Name"
        />
        <TextField
          name="lastName"
          onChange={handleChange}
          defaultValue={person.lastName}
          label="Last Name"
        />
        <TextField
          name="phoneNumber"
          onChange={handleChange}
          defaultValue={person.phoneNumber}
          label="Phone"
        />
        <TextField
          name="email"
          onChange={handleChange}
          defaultValue={person.email}
          label="Email"
        />
        <TextField
          name="dateOfBirth"
          onChange={handleChange}
          defaultValue={person.dateOfBirth}
          type="date"
          label="Date of Birth"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    </Box>
  );
}
export default PersonalDetails;
