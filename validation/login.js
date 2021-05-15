const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(passedInData) {
  let listOfErrors = {};

  if(isEmpty(passedInData.email)){
    passedInData.email = ""
  }
  if(isEmpty(passedInData.password)){
    passedInData.password = ""
  }

  // email empty?
  if (Validator.isEmpty(passedInData.email)) {
    listOfErrors.email = "Email field must be filled";
  } else if (!Validator.isEmail(passedInData.email)) {
    listOfErrors.email = "Email format is not correct";
  }
  // is password empty?
  if (Validator.isEmpty(passedInData.password)) {
    listOfErrors.password = "Password field must be filled";
  }
  //render errors
  return {
    errors: listOfErrors,
    isValid: isEmpty(listOfErrors)
  };
};
