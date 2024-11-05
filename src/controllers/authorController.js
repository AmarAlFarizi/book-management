const Author = require('../models/Author');

// GET all authors
exports.getAuthors = async (req, res) => {
    try {
        const authors = await Author.find({ isDeleted: false });
        res.status(200).json({
            message: 'Authors retrieved successfully',
            authors: authors});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET author by ID
exports.getAuthorById = async (req, res) => {
    try {
        const author = await Author.findById(req.params.id);
        res.status(200).json({author});
    } catch (error) {
        res.status(404).json({ error: "Author not found" });
    }
};

// CREATE new author
exports.createAuthor = async (req, res) => {
    try {
        const newAuthor = await Author.create(req.body);
        res.status(201).json({
            message: 'Author created successfully',
            newAuthor: newAuthor});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// UPDATE author
exports.updateAuthor = async (req, res) => {
    try {
        const updatedAuthor = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({
            message:'Author updated successfully',
            updatedAuthor:updatedAuthor});
    } catch (error) {
        res.status(404).json({ error: "Author not found" });
    }
};

// DELETE author
exports.deleteAuthor = async (req, res) => {
    try {
        await Author.findByIdAndUpdate(req.params.id, { isDeleted: true });
        res.status(200).json({ message: "Author deleted successfully" });
    } catch (error) {
        res.status(404).json({ error: "Author not found" });
    }
};