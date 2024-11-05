const Category = require('../models/Category');

// GET all categories
exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find({ isDeleted: false });
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET category by ID
exports.getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        res.status(200).json(category);
    } catch (error) {
        res.status(404).json({ error: "Category not found" });
    }
};

// CREATE new category
exports.createCategory = async (req, res) => {
    try {
        const newCategory = await Category.create(req.body);
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// UPDATE category
exports.updateCategory = async (req, res) => {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(404).json({ error: "Category not found" });
    }
};

// DELETE category
exports.deleteCategory = async (req, res) => {
    try {
        await Category.findByIdAndUpdate(req.params.id, { isDeleted: true });
        res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
        res.status(404).json({ error: "Category not found" });
    }
};