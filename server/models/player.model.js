// import mongoose
const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Must ender a play {PATH}."],
      minlength: [2, "{PATH} must be at least 2 characters long"],
    },
    perfPosition: {
      type: String,
    },
  },
  { timestamps: true }
);

const Player = mongoose.model("Player", PlayerSchema);
module.exports = Player;
