const express = require("express");
const { validateToken } = require("../config/tokens");
const { Op } = require("sequelize");
const User = require("../models/Users");
const Favorite = require("../models/Favorites");

const router = express.Router();

function validateAuth(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.sendStatus(401);

  const { payload } = validateToken(token);
  if (!payload) return res.sendStatus(401);
  req.user = payload;
  next();
}

router.post("/", (req, res, next) => {
  User.create(req.body).then(() => res.sendStatus(201));
});

router.get("/me", validateAuth, (req, res) => {
  res.send(req.user);
});

router.get("/find/:query", (req, res, next) => {
  User.findAll({
    where: {
      [Op.or]: [
        {
          name: {
            [Op.iLike]: `%${req.params.query}%`,
          },
        },
        {
          lastname: { [Op.iLike]: `%${req.params.query}%` },
        },
        {
          username: { [Op.iLike]: `%${req.params.query}%` },
        },
        {
          email: { [Op.iLike]: `%${req.params.query}%` },
        },
      ],
    },
    include: { model: Favorite },
  }).then((resp) => {
    res.send(resp);
  });
});

module.exports = router;
