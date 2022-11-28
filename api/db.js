const Sequelize = require("sequelize");
const {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_URI,
} = require("./config/config.js");
console.log("this is de db_host", DB_HOST);

const sequelize = new Sequelize(DB_URI);

module.exports = sequelize;
