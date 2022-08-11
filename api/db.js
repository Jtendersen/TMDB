const Sequelize = require("sequelize");

const sequelize = new Sequelize("users_tmdb", "postgres", "1234", {
  host: "localhost",
  dialect: "postgres",
  logging: console.log(),
});

module.exports = sequelize;
