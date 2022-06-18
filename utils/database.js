require("dotenv").config();
const { Sequelize } = require("sequelize");

const db = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  logging: false,
});

module.exports = { db };
