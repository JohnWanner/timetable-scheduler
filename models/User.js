const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

let User = mongoose.model("users", UserSchema);

//compile to a model
module.exports = User;


