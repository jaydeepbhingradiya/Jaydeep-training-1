import { Box, TextField, Typography } from "@mui/material";
import React from "react";

function BankDetails({ handleChange, person }) {
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
        <Typography variant="h4">Bank Details</Typography>
      </div>
      <div>
        <TextField
          name="accountNumber"
          label="Account Number"
          defaultValue={person.accountNumber}
          onChange={handleChange}
        />
        <TextField
          name="ifsc"
          onChange={handleChange}
          label="IFSC"
          defaultValue={person.ifsc}
        />
        <TextField
          name="pancardNumber"
          label="PAN Card Number"
          defaultValue={person.pancardNumber}
          onChange={handleChange}
        />
        <TextField
          name="adharcardNumber"
          label="Adhar Card Number"
          defaultValue={person.adharcardNumber}
          onChange={handleChange}
        />
      </div>
    </Box>
  );
}

export default BankDetails;
