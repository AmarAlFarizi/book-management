const mongoose = require('mongoose');

const borrowBookSchema = new mongoose.Schema({
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  borrowerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Borrower', required: true },
  borrowedAt: { type: Date, default: Date.now },
  expectedReturnedAt: Date,
  returnedAt: Date,
});

module.exports = mongoose.model('BorrowBook', borrowBookSchema);
