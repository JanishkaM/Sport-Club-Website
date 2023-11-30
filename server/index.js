const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.SERVER_PORT || 3001;
const app = express();

const playerRoute = require("./routes/PlayerRoute");
const matchRoute = require("./routes/MatchRoute");
const teamRoute = require("./routes/TeamRoute");
const adminRoute = require("./routes/AdminRoute");

const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://manstillofficial:5050100ch@sport-club.imswdi8.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`server running on ports ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/v1/player", playerRoute);
app.use("/api/v1/Match", matchRoute);
app.use("/api/v1/team", teamRoute);
app.use("/api/v1/admin", adminRoute);
