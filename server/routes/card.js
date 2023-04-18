// Маршруты для модели Page для обработки запросов с фронта.
const express = require("express");
const router = express.Router();
const Card = require("../model/card");

router.post("/", async (req, res) => {
  try {
    const card = new Card({
      title: req.body.h1,
      description: req.body.description,
      content: req.body.content,
    });
    const newCard = card.save();
    await res.status(201).json(newCard);
  } catch (error) {
    console.log(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const allCard = await Card.find();
    await res.json(allCard);
  } catch {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/", async (req, res) => {
  try {
    await Card.deleteOne({
      title: req.body.nameCard,
    });
    const allCard = await Card.find();
    console.log(res.body = allCard);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
