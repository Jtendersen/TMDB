const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  res.clearCookie("token", {
    domain: "localhost",
    path: "/",
  });

  res.sendStatus(204);
});

module.exports = router;
