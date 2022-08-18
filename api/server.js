const express = require("express");
const morgan = require("morgan");
var cookieParser = require("cookie-parser");
const index = require("./models/index");

const routes = require("./routes");
const db = require("./db");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan("tiny"));

app.use("/api", routes);

const PORT = process.env.PORT || 3001;

db.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
});
