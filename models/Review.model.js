const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  text: String,
  reviewer: String,
  book: {
    ref: "Book",
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
