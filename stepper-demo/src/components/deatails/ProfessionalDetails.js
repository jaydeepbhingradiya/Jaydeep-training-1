import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import MultipleSelectChip from "../multipleselectchip/MultipleSelectChip";

function ProfessionalDetails({ handleChange, person }) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "45%" },
      }}
      noValidate
      // autoComplete="off"
    >
      <div className="App">
        <Typography variant="h4">Professional Details</Typography>
        <Typography variant="h5">Resume</Typography>
        <TextField type="file" style={{ width: "20%" }} />
      </div>
      <div>
        <p>Total Experienace</p>
        <TextField
          name="totalYearofExperience"
          type="number"
          label="Year"
          defaultValue={person.totalYearofExperience}
          onChange={handleChange}
        />
        <TextField
          type="number"
          name="totalmonthofExperience"
          label="Months"
          defaultValue={person.totalmonthofExperience}
          onChange={handleChange}
        />
      </div>
      <div>
        <MultipleSelectChip onchange={handleChange} skills={person.skills} />
      </div>
    </Box>
  );
}

export default ProfessionalDetails;
