const isEmpty = require("is-empty");
const Validator = require("validator");

module.exports = function validateFormInput(passedInData) {
  let listOfErrors = {};


  if (isEmpty(passedInData.name)){
    passedInData.name = ""
  }
  if(isEmpty(passedInData.email)){
    passedInData.email = ""
  }
  if(isEmpty(passedInData.password)){
    passedInData.password = ""
  }
  if(isEmpty(passedInData.password2)){
    passedInData.password2 = ""
  }

  // is name empty?
  if (Validator.isEmpty(passedInData.name)) {
    listOfErrors.name = "Name field must be filled in";
  }
  //is email empty? is it in correct format?
  if (Validator.isEmpty(passedInData.email)) {
    listOfErrors.email = "Email field must be filled in";
  } else if (!Validator.isEmail(passedInData.email)) {
    listOfErrors.email = "Email format is not correct";
  }

  // password empty? password2 empty? length in range? two passwords match?
  if (Validator.isEmpty(passedInData.password)) {
    listOfErrors.password = "Password field must be filled in";
  }
  if (Validator.isEmpty(passedInData.password2)) {
    listOfErrors.password2 = "Confirm password field must be filled in";
  }
  if (!Validator.isLength(passedInData.password, { min: 8, max: 20 })) {
    listOfErrors.password = "Password must be at minimum 8 charactors";
  }

  if (!Validator.equals(passedInData.password, passedInData.password2)) {
    listOfErrors.password2 = "The password does not match";
  }

  return {
    errors: listOfErrors,
    isValid: isEmpty(listOfErrors)
  };
};
