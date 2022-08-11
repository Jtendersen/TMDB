const express = require("express");
const morgan = require("morgan");
const user = require("./models/Users.js"); //eliminar - solo creado para crear la DB

const routes = require("./routes");
const db = require("./db");

const app = express();

app.use(express.json());

app.use(morgan("tiny"));

app.use("/api", routes);

const PORT = process.env.PORT || 3001;

db.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
});
