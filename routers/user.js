const express = require("express");
const User = require("../models").user;
const Creations = require("../models").creation;

const { Router } = express;

const router = new Router();

// router.get("/", (request, response) => response.send("Welcome to user!"));

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      include: [Creations],
    });
    res.send(users);
  } catch (e) {
    next(e);
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId, {
      include: [Creations],
    });
    if (!user) {
      res.status(404).send("User not found");
    } else {
      res.send(user);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
