const express = require("express");
const Favorite = require("../models/Favorites.js");
const User = require("../models/Users.js");

const router = express.Router();

router.post("/add/:username", async (req, res, next) => {
  const findedUser = await User.findOne({
    where: {
      username: req.params.username,
    },
  });
  try {
    const favorite = await Favorite.create({
      movieTitle: req.body.movieTitle,
      tmdbId: req.body.tmdbId,
      userId: findedUser.dataValues.id,
    });
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});

router.get("/:username", async (req, res, next) => {
  try {
    const findedUser = await User.findOne({
      where: {
        username: req.params.username,
      },
    });
    const favs = await Favorite.findAll({
      where: {
        userId: findedUser.dataValues.id,
      },
    });

    res.send(favs);
  } catch (error) {
    next(error);
  }
});

router.delete("/:username", async (req, res, next) => {
  console.log(req.body);
  try {
    const findedUser = await User.findOne({
      where: {
        username: req.params.username,
      },
    });
    await Favorite.destroy({
      where: {
        userId: findedUser.dataValues.id,
        tmdbId: req.body.tmdbId,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
