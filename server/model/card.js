const mongoose = require("mongoose");

const pageSchema = new mongoose.Schema({
  // Описываем модель Page. То есть из чего состоит динамическая страница сайта.
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdDate: {
    // У каждой страницы автоматически сохраняется дата создания.
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Card", pageSchema);
