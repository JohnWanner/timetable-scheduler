const exp = require("express");
const rtr = exp.Router();
const bcr = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// form validation
const validateFormInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// user and saved data
const User = require("../../models/User");
const SD = require("../../models/SavedData");

rtr.post("/register", (req, res) => {

  const {errors,isValid } = validateFormInput(req.body);

  // if not valid
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // if valid
  User.findOne({ email: req.body.email }).then(u => {
    if (u) {
      return res.status(400).json({ email: "This email is already taken" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      //salt round and callback funtion passed for hashing password
      bcr.genSalt(15, (err, salt) => {
        bcr.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

rtr.post("/login", (req, res) => {
  // validate form
  const { errors, isValid } = validateLoginInput(req.body);
  // if not valid
  if (!isValid) {
    return res.status(400).json(errors);
  }

  //if valid
  const email = req.body.email;
  const password = req.body.password;

  // check if user exists in the database
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ emailnotfound: "no such email address found" });
    }

    //check if password is correct
    bcr.compare(password, user.password).then(m => {
      if (m) {
        const payload = {id: user.id, name: user.name};

        jwt.sign(payload, keys.secretOrKey, {expiresIn: 864000}, (err, token) => {
            res.json({
              success: true, token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password is incorrect" });
      }
    });
  });
});

rtr.post("/save", (req, res) => {

  const id = req.body.identity;
  const subjects = req.body.subjects;
  const groups = req.body.groups;



  SD.findOne({ identity: id }).then( sd => {
    if (sd == null) {
      //no such id
      const newSd = new SD({
        identity: id,
        subjects: subjects,
        groups: groups
      });
      newSd
          .save()
          .then(console.log("sd saved"))
          .catch(err => console.log(err));
    } else {
      SD.findOneAndUpdate({identity: id}, {subjects: subjects, groups: groups}).then(console.log("updated"))
    }
  });
});

rtr.post("/init", (req, res) => {

  const id = req.body.identity;

  SD.findOne({ identity: id }).then(item => {
    if(item) {
      res.json({subjects: item.subjects, groups: item.groups})
    }
    else{
      res.json({subjects: [], groups: []})
    }

  }
    );
});

module.exports = rtr;
