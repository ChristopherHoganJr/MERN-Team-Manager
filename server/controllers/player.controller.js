// import the player model
const { model } = require("mongoose");
const Player = require("../models/player.model");

model.exports = {
  findAll: (req, res) => {
    Player.find()
      .then((allPlayers) => res.json(allPlayers))
      .catch((err) => res.status(400).json(err));
  },
  create: (req, res) => {
    Player.create(req.body)
      .then((newPlayer) =>
        res.json({ message: "Created player", newPlayer, status: 200 })
      )
      .catch((err) => res.status(400).json(err));
  },
  findOne: (req, res) => {
    Player.findById(req.params.id)
      .then((onePlayer) => res.json(onePlayer))
      .catch((err) => res.status(400).json(err));
  },
  update: (req, res) => {
    Player.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updatedPlayer) => res.json(updatedPlayer))
      .catch((err) => res.status(400).json(err));
  },
  delete: (req, res) => {
    Player.findByIdAndDelete(req.params.id)
      .then((result) => res.json(result))
      .catch((err) => res.status(400).json(err));
  },
};
