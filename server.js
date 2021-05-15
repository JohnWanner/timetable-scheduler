const path = require("path")
const express = require("express");
const mongo = require("mongoose");
const bparser = require("body-parser");
const passpt = require("passport");
const users = require("./routes/api/users");
const app = express();
require("dotenv").config()


// Parse incoming request bodies
app.use(
  bparser.urlencoded({
    extended: false
  })
);
app.use(bparser.json());
app.use(express.static(path.join(__dirname, "fe", "build")))

// Mongo Database Configuration
//get the url
const dbURL = require("./config/keys").mongoDbURI;
// Connect to MongoDB using mongoose object modeling tool
mongo
  .connect(
    dbURL,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB connection was successful!"))
  .catch(err => console.log(err));

// Passport middleware initialization
app.use(passpt.initialize());

// Passport configiguration
require("./config/passport")(passpt);

// API Routes
app.use("/api/users", users);

const port = process.env.PORT || 8000;


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "fe", "build", "index.html"));
});

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
