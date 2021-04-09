const express = require("express");
const Category = require("../models").category;
const Creation = require("../models").creation;

const { Router } = express;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const categories = await Category.findAll({
      include: [Creation],
    });
    res.send(categories);
  } catch (e) {
    next(e);
  }
});

router.get("/:categoryId", async (req, res) => {
  try {
    const categoryId = parseInt(req.params.categoryId);
    const category = await Category.findByPk(categoryId, {
      include: [Creation],
    });
    if (!category) {
      res.status(404).send("Category not found");
    } else {
      res.send(category);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
