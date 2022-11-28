const Sequelize = require("sequelize");
const {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
} = require("./config/config.js");
console.log("this is de db_host", DB_HOST);

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;
