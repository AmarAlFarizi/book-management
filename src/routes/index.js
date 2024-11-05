const express = require("express");
const authorRoutes = require("./authorRoutes");
const bookRoutes = require("./bookRoutes");
const categoryRoutes = require("./categoryRoutes");
const borrowerRoutes = require("./borrowerRoutes");
const borrowBookRoutes = require("./borrowBookRoutes");

const routes = express.Router();

// Tambahkan semua routes yang telah dibuat 
routes.use("/authors", authorRoutes);
routes.use("/authors/:id", authorRoutes);
routes.use("/books", bookRoutes);
routes.use("/categories", categoryRoutes);
routes.use("/borrowers", borrowerRoutes);
routes.use("/borrow", borrowBookRoutes);


module.exports = routes;