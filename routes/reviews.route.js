const { Router } = require("express");
const reviewController = require("../controllers/reviews.controller.js");

const router = Router();

router.post("/reviews", reviewController.postReview);
router.delete("/reviews/:id", reviewController.deleteReview);
router.get("/reviews/to-one-book/:id", reviewController.getReviewsToOneBook);

module.exports = router;
