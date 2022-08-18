const express = require("express");
const users = require("./users.js");
const login = require("./login.js");
const logout = require("./logout.js");
const favorites = require("./favorites.js");

const router = express.Router();

router.use("/users", users);
router.use("/login", login);
router.use("/logout", logout);
router.use("/favorites", favorites);

module.exports = router;
