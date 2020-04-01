const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const axios = require("axios");


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


// If deployed, use the deployed database. Otherwise use the local kickCovidUsers database
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/kickCovidUsers";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// require("./routes")(app);


// localhost listening
app.listen(PORT, function() {
  console.log("App listening on http://localhost:" + PORT);
});