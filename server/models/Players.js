const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  name: String,
  address: String,
  contact: String,
  email: String,
  team: String,
  points: Number,
  age: Number,
});

const PlayerModel = mongoose.model("players", PlayerSchema);
module.exports = PlayerModel;
