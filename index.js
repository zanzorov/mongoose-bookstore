const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(require("./routes/books.route.js"));
app.use(require("./routes/genres.route.js"));
app.use(require("./routes/reviews.route.js"));

mongoose
  .connect("mongodb+srv://aber:code@cluster0.dtgtd.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(4000, () => {
  console.log("Сервер запущен успешно");
});
