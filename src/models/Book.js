const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  summary: String,
  book_identifier: String,
  stocks: [{ status: String }],
  authored: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
});

module.exports = mongoose.model('Book', bookSchema);