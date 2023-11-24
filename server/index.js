const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PlayerModel = require("./models/Players");

const app = express();
app.use(cors());
app.use(express.json());

// 9LwO4JyOUXl0HfxI

mongoose.connect('mongodb+srv://testuser:9LwO4JyOUXl0HfxI@sport-club.imswdi8.mongodb.net/?retryWrites=true&w=majority');

app.post("/admin-players-create", (req, res) => {
  PlayerModel.create(req.body)
    .then((players) => res.json(players))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is Running");
});