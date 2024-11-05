const Book = require('../models/Book');

// GET all books
exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET book by ID
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.status(200).json(book);
    } catch (error) {
        res.status(404).json({ error: "Book not found" });
    }
};

// CREATE new book
exports.createBook = async (req, res) => {
    try {
        const newBook = await Book.create(req.body);
        res.status(201).json({
            message: 'Book created successfully',
            book: newBook
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// UPDATE book
exports.updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(404).json({ error: "Book not found" });
    }
};

// DELETE book
exports.deleteBook = async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(404).json({ error: "Book not found" });
    }
};
