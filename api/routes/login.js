const express = require("express");
const { generateToken } = require("../config/tokens");
const User = require("../models/Users");

const router = express.Router();

router.post("/", (req, res, next) => {
  const { username, password } = req.body;
  User.findOne({
    where: {
      username,
    },
  }).then((findedUser) => {
    if (!findedUser) return res.sendStatus(401);
    findedUser.validatePassword(password).then((isValid) => {
      if (!isValid) return res.sendStatus(401);
      const payload = {
        name: findedUser.name,
        lastname: findedUser.lastname,
      };
      const token = generateToken(payload);
      res.cookie("token", token);
      res.send(payload);
    });
  });
});

module.exports = router;
