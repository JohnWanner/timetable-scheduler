const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    identity: {
        type: String
    },
    subjects: {
        type: Array
    },
    groups: {
        type: Array
    }
});

module.exports = SD = mongoose.model("sd", UserSchema);