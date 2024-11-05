const BorrowBook = require('../models/BorrowBook');

// GET all borrowed books
exports.getBorrowedBooks = async (req, res) => {
    try {
        const borrowedBooks = await BorrowBook.find({ returnedAt: null });
        res.status(200).json(borrowedBooks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// CREATE new borrowed book
exports.borrowBook = async (req, res) => {
    try {
        const borrowedBook = await BorrowBook.create(req.body);
        res.status(201).json(borrowedBook);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// RETURN borrowed book
exports.returnBook = async (req, res) => {
    try {
        const { id } = req.params;
        const returnedBook = await BorrowBook.findByIdAndUpdate(id, { returnedAt: new Date() }, { new: true });
        res.status(200).json(returnedBook);
    } catch (error) {
        res.status(404).json({ error: "Borrowed book not found" });
    }
};