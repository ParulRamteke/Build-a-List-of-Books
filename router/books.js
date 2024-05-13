const express = require("express");
const router = express.Router();
const booksController = require("../controller/books");

router.get("/getAllBooks", booksController.getAllBooks);
router.get("/year",booksController.SpecificBookbyyear);
router.get("/id",booksController.SpecificBookbyid);
router.post("/createBook", booksController.createBook);
router.put("/updateBookByYear/year", booksController.updateBookByYear);
router.delete("/deleteBook/year", booksController.deleteBook);

module.exports = router;

