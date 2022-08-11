const express = require("express");
const users = require("./users.js");
const login = require("./login.js");

const router = express.Router();

router.use("/users", users);
router.use("/login", login);

module.exports = router;
