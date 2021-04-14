const express = require("express");
const Creation = require("../models").creation;
const User = require("../models").user;
const Category = require("../models").category;
const Comment = require("../models").comment;
const auth = require("../auth/middleware");

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

router.post("/:userId", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    console.log(user);
    const { title, description, imageUrl, difficulty, categoryId } = req.body;

    if (!title) {
      return res.status(400).send({ message: "A creation must have a name" });
    }

    if (!description) {
      return res
        .status(400)
        .send({ message: "A creation must have a description" });
    }

    if (!imageUrl) {
      return res
        .status(400)
        .send({ message: "A creation must have an image Url" });
    }

    if (!difficulty) {
      return res
        .status(400)
        .send({ message: "A creation must have a difficulty level" });
    }

    if (!categoryId) {
      return res
        .status(400)
        .send({ message: "A creation must have a category" });
    }

    const newCreationDone = await Creation.create({
      title,
      description,
      imageUrl,
      difficulty,
      categoryId,
      userId: user.id,
    });

    return res.status(201).send({
      message: "Creation successfully created",
      newCreationDone,
    });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.post("/:creationId/comments", async (req, res) => {
  try {
    const creation = await Creation.findByPk(req.params.creationId);
    console.log(Creation);

    if (creation === null) {
      return res.status(404).send({ message: "This creation does not exist" });
    }

    const { author, commentText } = req.body;

    if (!author) {
      return res.status(400).send({ message: "A comment must have an author" });
    }

    const newComment = await Comment.create({
      author,
      commentText,
      creationId: creation.id,
    });

    return res.status(201).send({ message: "Comment created", newComment });
  } catch (e) {
    console.log(e);
    return res.status(e.message);
    next(e);
  }
});

module.exports = router;
