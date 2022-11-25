const Sequelize = require("sequelize");

const sequelize = new Sequelize("railway", "postgres", "0b7Pj8LIKgiDIU6ppps3", {
  host: "containers-us-west-81.railway.app",

  // host: "localhost",
  dialect: "postgres",
  logging: console.log(),
});

module.exports = sequelize;
