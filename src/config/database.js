const { Sequelize } = require("sequelize");

// Support both custom DB_* envs and Railway's default MYSQL* envs
const DB_NAME =
  process.env.DB_NAME ||
  process.env.MYSQLDATABASE ||
  process.env.MYSQL_DATABASE;

const DB_USER =
  process.env.DB_USER ||
  process.env.MYSQLUSER ||
  process.env.MYSQL_USER ||
  process.env.MYSQLUSER_ROOT;

const DB_PASSWORD =
  process.env.DB_PASSWORD ||
  process.env.MYSQLPASSWORD ||
  process.env.MYSQL_PASSWORD ||
  process.env.MYSQL_ROOT_PASSWORD;

const DB_HOST =
  process.env.DB_HOST ||
  process.env.MYSQLHOST ||
  process.env.MYSQL_HOST ||
  process.env.DATABASE_URL; // fallback if Railway provides a single URL

const DB_PORT = process.env.DB_PORT || process.env.MYSQLPORT || 3306;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: "mysql",
  logging: process.env.NODE_ENV === "development" ? console.log : false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = sequelize;
