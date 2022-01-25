import { Box, TextField } from "@mui/material";
import React from "react";

function EducatonDetailForm() {
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "80%" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="App">
          <div>
            <TextField label="Course" variant="filled" />
          </div>
          <div>
            <TextField label="Univercity" variant="filled" />
          </div>

          <div>
            <TextField type="date" label=" Pass on" variant="filled" />
          </div>
          <div>
            <TextField label=" Grade" variant="filled" />
          </div>
        </div>
      </Box>
    </div>
  );
}

export default EducatonDetailForm;
