const { Router } = require("express");
const bookController = require("../controllers/books.controller.js");

const router = Router();

router.post("/books", bookController.postBook);
router.delete("/books/:id", bookController.deleteBook);
router.patch("/books/:id", bookController.patchBook);
router.get("/books/:id", bookController.getOneBook);
router.get("/books", bookController.getBooks);
router.get("/books/from-genre/:id", bookController.getBooksFromGenre);

module.exports = router;
