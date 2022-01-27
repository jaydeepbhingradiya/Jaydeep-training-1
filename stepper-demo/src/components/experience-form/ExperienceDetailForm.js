import { Box, Button, Paper, TextField } from "@mui/material";
import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";

function ExperienceDetailForm() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "80%" },
      }}
      noValidate
      autoComplete="off"
    >
      <Paper className="paper" elevation={3}>
        <div className="cls-btn">
          <Button>
            <CancelIcon sx={{ color: "red" }} />
          </Button>
        </div>
        <div className="App">
          <TextField label="Company" />
          <TextField label="Designation" />
          <TextField label="Department" />
          <TextField type="number" label="CTC" />
          <TextField type="date" label=" Form" />
          <TextField type="date" label=" to" />
        </div>
      </Paper>
    </Box>
  );
}

export default ExperienceDetailForm;
