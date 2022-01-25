import { Box, TextField } from "@mui/material";
import React from "react";

function BankDetails() {
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
          <h2>Bank Details</h2>
        </div>
        <div>
          <TextField label="Account Number" variant="filled" />
        </div>
        <div>
          <TextField label="IFSC" variant="filled" />
        </div>
        <div>
          <TextField label="PAN Card Number" variant="filled" />
        </div>
        <div>
          <TextField label="Adhar Card Number" variant="filled" />
        </div>
      </Box>
    </div>
  );
}

export default BankDetails;
