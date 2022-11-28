const express = require("express");
const morgan = require("morgan");
var cookieParser = require("cookie-parser");
const cors = require("cors");
const { PORT } = require("./config/config.js");

console.log("este es el port", PORT);

const routes = require("./routes");
const db = require("./db");

const app = express();

app.use(
  cors({
    origin: "https://tmdb-jtendersen.vercel.app/",
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(morgan("tiny"));

app.use("/api", routes);

// const PORT = process.env.PORT || 3001;

db.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
});
