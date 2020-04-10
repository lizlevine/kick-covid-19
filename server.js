const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
<<<<<<< HEAD
const axios = require("axios");
const path = require("path");
=======
//const axios = require("axios");

require('dotenv').config()
const auth = require('./utils/auth');
>>>>>>> f75294c034506ac204d7649124713bdce7643be7

// Require all models
const db = require("./");

const PORT = process.env.PORT || 3030;

// Initialize Express
const app = express();

// Configure middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(require("./routes"));
<<<<<<< HEAD
app.use(express.static(path.join(__dirname, "./frontend/kick-covid-19/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./frontend/kick-covid-19/build"));
});
=======
app.use(auth.handleErrors);
>>>>>>> f75294c034506ac204d7649124713bdce7643be7

// If deployed, use the deployed database. Otherwise use the local kickCovidUsers database
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/kickCovidUsers";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// localhost listening
app.listen(PORT, function () {
  console.log("App listening on http://localhost:" + PORT);
});
