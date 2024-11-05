const express = require("express");
const authorController = require("../controllers/authorController");

const routes = express.Router();

routes.get("/", authorController.getAuthors);
routes.get("/:id", authorController.getAuthorById);
routes.post("/", authorController.createAuthor);
routes.put("/:id", authorController.updateAuthor);
routes.delete("/:id", authorController.deleteAuthor);

module.exports = routes;