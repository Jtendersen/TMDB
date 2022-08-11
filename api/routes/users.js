const express = require("express");
const User = require("../models/Users");

const router = express.Router();

router.post("/", (req, res, next) => {
  User.create(req.body).then(() => res.sendStatus(201));
});

module.exports = router;
