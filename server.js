const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const axios = require("axios");
const path = require("path");

require("dotenv").config();
const auth = require("./utils/auth");

// Require all models
const db = require("./models");

const PORT = process.env.PORT || 3030;

// Initialize Express
const app = express();

// Configure middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require("./routes"));
app.use(auth.handleErrors);

if (process.env.NODE_ENV === "production") {
  app.use(
    express.static(path.join(__dirname, "./frontend/kick-covid-19/build"))
  );
  app.get("*", (req, res) => {
    res.sendFile(
      path.join(__dirname, "./frontend/kick-covid-19/build/index.html")
    );
  });
}
// If deployed, use the deployed database. Otherwise use the local kickCovidUsers database
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/kickCovidUsers";

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connected"));

// localhost listening
app.listen(PORT, function () {
  console.log("App listening on http://localhost:" + PORT);
});
