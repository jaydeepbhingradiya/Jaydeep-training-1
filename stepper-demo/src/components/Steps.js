import React, { useState } from "react";
import {
  Button,
  Typography,
  Step,
  StepLabel,
  Stepper,
  Box,
} from "@mui/material";
import PersonalDetails from "./deatails/PersonalDetails";
import BankDetails from "./deatails/BankDetails";
import ProfessionalDetails from "./deatails/ProfessionalDetails";
import CurrentStatus from "./deatails/CurrentStatus";
import ExperienceDetails from "./deatails/ExperienceDetails";
import EducationalDetails from "./deatails/EducationalDetails";

const steps = [
  "Personal Details",
  "Bank Details",
  "Professional Details",
  "Current Status",
  "Experience Details",
  "Educational Details",
];

const details = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  dateOfBirth: "",
  accountNumber: "",
  ifsc: "",
  pancardNumber: "",
  adharcardNumber: "",
  totalmonthofExperience: "",
  totalYearofExperience: "",
  currentDesignation: "",
  currentDepartment: "",
  currentCTC: "",
  startWorkingFrom: "",
  skills: [],
};

export default function Steps() {
  const [person, setPeroson] = useState(details);
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    person[name] = value;
    setPeroson(person);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper className="steps" activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="step">
            {(function () {
              console.log(activeStep);
              switch (activeStep) {
                case 0:
                  return (
                    <PersonalDetails
                      handleChange={handleChange}
                      person={person}
                    />
                  );
                case 1:
                  return (
                    <BankDetails handleChange={handleChange} person={person} />
                  );
                case 2:
                  return (
                    <ProfessionalDetails
                      handleChange={handleChange}
                      person={person}
                    />
                  );
                case 3:
                  return (
                    <CurrentStatus
                      handleChange={handleChange}
                      person={person}
                    />
                  );
                case 4:
                  return (
                    <ExperienceDetails
                      handleChange={handleChange}
                      person={person}
                    />
                  );
                case 5:
                  return (
                    <EducationalDetails
                      handleChange={handleChange}
                      person={person}
                    />
                  );
                default:
                  break;
              }
            })()}
          </div>

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} style={{ border: "1px" }} />

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
