const express = require("express");
const borrowBookController = require("../controllers/borrowBookController");

const router = express.Router();

router.post("/book", borrowBookController.borrowBook);
router.get("/book/list", borrowBookController.getBorrowedBooks);
router.post("/book/return/:id", borrowBookController.returnBook);

module.exports = router;
