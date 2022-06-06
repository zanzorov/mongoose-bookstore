const Book = require("../models/Book.model");

module.exports = bookController = {
  postBook: (req, res) => {
    Book.create({
      name: req.body.name,
      author: req.body.author,
      genre: req.body.genre,
    })
      .then(() => {
        res.json("Книга добавлена");
      })
      .catch(() => {
        res.json({ error: "Ошибка при добавлении книги" });
      });
  },
  deleteBook: (req, res) => {
    Book.findByIdAndRemove(req.params.id) // req.params.id необходим, если работаем с одним документом (get, delete, patch..)
      .then(() => {
        res.json("Книга удалена");
      })
      .catch(() => {
        res.json({ error: "Ошибка при удалении книги" });
      });
  },
  patchBook: (req, res) => {
    Book.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      author: req.body.author,
      genre: req.body.genre,
    })
      .then(() => {
        res.json("Книга изменена");
      })
      .catch(() => {
        res.json({ error: "Ошибка при изменении книги" });
      });
  },
  getOneBook: (req, res) => {
    Book.findById(req.params.id)
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json({ error: "Ошибка при запросе книги" });
      });
  },
  getBooks: (req, res) => {
    Book.find({})
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json({ error: "Ошибка при запросе всех книг" });
      });
  },
  getBooksFromGenre: (req, res) => {
    Book.find({ genre: req.params.id })
      .populate("genre")
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json({
          error: "Ошибка при запросе всех книг из определенного жанра",
        });
      });
  },
};
