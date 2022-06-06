const Genre = require("../models/Genre.model");

module.exports = genreController = {
  postGenre: (req, res) => {
    Genre.create({
      genreName: req.body.genreName,
      genreDescription: req.body.genreDescription,
    })
      .then(() => {
        res.json("Жанр добавлен");
      })
      .catch(() => {
        res.json({ error: "Ошибка при добавлении жанра" });
      });
  },
  deleteGenre: (req, res) => {
    Genre.findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Жанр удален");
      })
      .catch(() => {
        res.json({ error: "Ошибка при удалении жанра" });
      });
  },
  getGenres: (req, res) => {
    Genre.find({})
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json({ error: "Ошибка при выводе всех жанров" });
      });
  },
};
