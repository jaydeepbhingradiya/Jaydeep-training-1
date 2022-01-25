import { Box, TextField } from "@mui/material";
import React from "react";
import MultipleSelectChip from "../multipleselectchip/MultipleSelectChip";

function ProfessionalDetails() {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "45%" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="App">
          <h2>Professional Details</h2>
          <h4>Resume</h4>
          <TextField type="file" style={{ width: "20%" }} />
        </div>
        <div>
          <p>Total Experienace</p>
          <TextField type="number" label="Year" variant="filled" />
          <TextField type="number" label="Months" variant="filled" />
        </div>
        <div>
          <MultipleSelectChip />
        </div>
      </Box>
    </div>
  );
}

export default ProfessionalDetails;
