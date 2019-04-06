const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  bookId: { type: String, required: true},
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: String,
  image: String,
  link: String,
  saved: { type: Boolean, default: false},
  date: { type: Date, default: Date.now}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
