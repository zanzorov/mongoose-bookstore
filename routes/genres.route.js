const { Router } = require("express");
const genreController = require("../controllers/genres.controller.js");

const router = Router();

router.post("/genres", genreController.postGenre);
router.delete("/genres/:id", genreController.deleteGenre);
router.get("/genres", genreController.getGenres);

module.exports = router;
