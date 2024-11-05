const Borrower = require('../models/Borrower');

// GET all borrowers
exports.getBorrowers = async (req, res) => {
    try {
        const borrowers = await Borrower.find();
        res.status(200).json(borrowers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET borrower by ID
exports.getBorrowerById = async (req, res) => {
    try {
        const borrower = await Borrower.findById(req.params.id);
        res.status(200).json(borrower);
    } catch (error) {
        res.status(404).json({ error: "Borrower not found" });
    }
};

// CREATE new borrower
exports.createBorrower = async (req, res) => {
    try {
        const newBorrower = await Borrower.create(req.body);
        res.status(201).json(newBorrower);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// UPDATE borrower
exports.updateBorrower = async (req, res) => {
    try {
        const updatedBorrower = await Borrower.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedBorrower);
    } catch (error) {
        res.status(404).json({ error: "Borrower not found" });
    }
};

// DELETE borrower
exports.deleteBorrower = async (req, res) => {
    try {
        await Borrower.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Borrower deleted successfully" });
    } catch (error) {
        res.status(404).json({ error: "Borrower not found" });
    }
};