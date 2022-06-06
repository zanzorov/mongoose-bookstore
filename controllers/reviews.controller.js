const Review = require("../models/Review.model.js");

module.exports = reviewController = {
  postReview: (req, res) => {
    Review.create({
      text: req.body.text,
      reviewer: req.body.reviewer,
      book: req.body.book,
    })
      .then(() => {
        res.json("Рецензия добавлена");
      })
      .catch(() => {
        res.json({ error: "Ошибка при добавлении рецензии" });
      });
  },
  deleteReview: (req, res) => {
    Review.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Рецензия удалена");
      })
      .catch(() => {
        res.json({ error: "Ошибка при удалении рецензии" });
      });
  },
  getReviewsToOneBook: (req, res) => {
    Review.find({ book: req.params.id })
      .populate("book")
      .then((data) => {
        res.json(data);
      })
      .catch((error) => {
        res.json(error.message);
      });
  },
};
