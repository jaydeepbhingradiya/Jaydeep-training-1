export const personalDetails = (values) => {
  let errors = {};
  let errorCount = 0;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (!values.firstName) {
    errors.firstName = "Required!";
    errorCount++;
  }

  if (!values.lastName) {
    errors.lastName = "Required!";
    errorCount++;
  }

  if (!values.email) {
    errors.email = "Required!";
    errorCount++;
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format!";
    errorCount++;
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = "Required!";
    errorCount++;
  } else if (values.phoneNumber.length !== 10) {
    errors.phoneNumber = "Phone number must be 10 characters";
    errorCount++;
  }

  if (!values.dateOfBirth) {
    errors.dateOfBirth = "Required!";
    errorCount++;
  }
  return {
    errors: errors,
    isValid: errorCount <= 0,
  };
};

export const bankDetails = (values) => {
  let errors = {};
  let errorCount = 0;
  const regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

  if (!values.accountNumber) {
    errors.accountNumber = "Required!";
    errorCount++;
  }

  if (!values.ifsc) {
    errors.ifsc = "Required!";
    errorCount++;
  }

  if (!values.pancardNumber) {
    errors.pancardNumber = "Required!";
    errorCount++;
  } else if (!regpan.test(values.pancardNumber)) {
    errors.pancardNumber = "This is not a valid pancard format!";
    errorCount++;
  }

  if (!values.adharcardNumber) {
    errors.adharcardNumber = "Required!";
    errorCount++;
  } else if (values.adharcardNumber.length !== 12) {
    errors.adharcardNumber = "This is not a valid adharcard number!";
    errorCount++;
  }

  return {
    errors: errors,
    isValid: errorCount <= 0,
  };
};

export const professionalDetails = (values) => {
  let errors = {};
  let errorCount = 0;

  if (!values.totalYearofExperience) {
    errors.totalYearofExperience = "Required!";
    errorCount++;
  }

  if (!values.totalmonthofExperience) {
    errors.totalmonthofExperience = "Required!";
    errorCount++;
  }

  if (!values.skills) {
    errors.skills = "Required!";
    errorCount++;
  }

  return {
    errors: errors,
    isValid: errorCount <= 0,
  };
};

export const currentStatus = (values) => {
  let errors = {};
  let errorCount = 0;

  if (!values.currentDesignation) {
    errors.currentDesignation = "Required!";
    errorCount++;
  }

  if (!values.currentDepartment) {
    errors.currentDepartment = "Required!";
    errorCount++;
  }

  if (!values.currentCTC) {
    errors.currentCTC = "Required!";
    errorCount++;
  }

  if (!values.startWorkingFrom) {
    errors.startWorkingFrom = "Required!";
    errorCount++;
  }

  return {
    errors: errors,
    isValid: errorCount <= 0,
  };
};
