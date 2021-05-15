const mongoose = require("mongoose");
const Usr = mongoose.model("users");
const Strategy = require("passport-jwt").Strategy;
const configKeys = require("../config/keys");
const JWT = require("passport-jwt").ExtractJwt;




const options = {
    jwtFromRequest: JWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: configKeys.secretOrKey
}


module.exports = passport => {
  passport.use(
    new Strategy(options, (jwt_payload, done) => {
      Usr.findById(jwt_payload.id)
        .then(user => {
          if (user) { //if not none
            return done(null, user);
          }
          else {
              return done(null, false);
          }
        }).catch(e => console.log(e));
    })
  );
};