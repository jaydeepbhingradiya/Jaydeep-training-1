import React from "react";
import { Box, TextField, Paper, Button } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

function EducatonDetailForm() {
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
          <TextField label="Course" />
          <TextField label="Univercity" />
          <TextField type="date" label=" Pass on" />
          <TextField label=" Grade" />
        </div>
      </Paper>
    </Box>
  );
}

export default EducatonDetailForm;
