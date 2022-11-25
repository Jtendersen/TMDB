const Sequelize = require("sequelize");
const {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
} = require("./config/config.js");

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "postgres",
  logging: console.log(),
});

module.exports = sequelize;
