const express = require("express");
const Creation = require("../models").creation;
const User = require("../models").user;
const Category = require("../models").category;
const Comment = require("../models").comment;

const { Router } = express;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const creations = await Creation.findAll({
      include: [User, Category, Comment],
    });
    res.send(creations);
  } catch (e) {
    next(e);
  }
});

router.get("/:creationId", async (req, res) => {
  try {
    const creationId = parseInt(req.params.creationId);
    const creation = await Creation.findByPk(creationId, {
      include: [User, Category, Comment],
    });
    if (!creation) {
      res.status(404).send("Creation not found");
    } else {
      res.send(creation);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
