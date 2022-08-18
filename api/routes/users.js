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

router.get("/find", (req, res, next) => {
  User.findAll({
    where: {
      [Op.or]: [
        {
          name: {
            [Op.iLike]: req.body.search,
          },
        },
        {
          lastname: { [Op.iLike]: req.body.search },
        },
        {
          username: { [Op.iLike]: req.body.search },
        },
        {
          email: { [Op.iLike]: req.body.search },
        },
      ],
    },
    include: { model: Favorite },
  }).then((resp) => {
    console.log("ESTE ES EL RESULTADO DE BUSQUEDA DE USERS", resp);
    res.send(resp);
  });
});

module.exports = router;
