require("dotenv").config();

const PORT = process.env.PORT || 3001;

const DB_HOST = process.env.DB_HOST || "localhost";
const DB_USER = process.env.DB_USER || "postgres";
const DB_PASSWORD = process.env.DB_PASSWORD || "1234";
const DB_NAME = process.env.DB_NAME || "users_tmdb";

module.exports = {
  PORT,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
};
