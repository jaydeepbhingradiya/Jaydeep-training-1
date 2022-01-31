import React from "react";
import { Box, Button, Icon, Typography } from "@mui/material";
import ExperienceDetailForm from "./../experience-form/ExperienceDetailForm";

function ExperienceDetails({ handleChange, person }) {
  const addExperienceHandler = () => {
    let curExpList = [...person.experienceDetails, {}];

    handleChange({
      target: { name: "experienceDetails", value: curExpList },
    });
  };

  const removeFormHandler = (index) => {
    person.experienceDetails.splice(index, 1);

    handleChange({
      target: { name: "experienceDetails", value: person.experienceDetails },
    });
  };

  const handleChange2 = (index, name, value) => {
    let currExp = { ...person.experienceDetails[index] };
    currExp[name] = value;
    let expList = [...person.experienceDetails];
    expList[index] = currExp;

    handleChange({
      target: {
        name: "experienceDetails",
        value: expList,
      },
    });
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%" },
      }}
      noValidate
      // autoComplete="off"
    >
      <div className="App">
        <Typography variant="h4">Experience Details </Typography>
      </div>
      <div>
        {(function () {
          let experienceForm = [];
          for (let i = 0; i < person.experienceDetails.length; i++) {
            experienceForm.push(
              <ExperienceDetailForm
                index={i}
                key={i}
                removeForm={removeFormHandler}
                handleChange={handleChange2}
                experienceDetails={person.experienceDetails[i] || {}}
              />
            );
          }
          return experienceForm;
        })()}
      </div>
      ;
      <div className="App">
        <Button onClick={addExperienceHandler}>
          <Icon baseClassName="fas" className="fa-plus-circle" />
        </Button>
        Add New Experience
      </div>
    </Box>
  );
}

export default ExperienceDetails;
