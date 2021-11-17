require('dotenv').config(); //{path: '../.env'}
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host    : process.env.DB_HOST,
    port    : process.env.DB_PORT,
    dialect : process.env.DB_DIALECT
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_TEST,
    host    : process.env.DB_HOST,
    port    : process.env.DB_PORT,
    dialect : process.env.DB_DIALECT
  },
  production: {
    "username": null,
    "password": null,
    "database": null,
    "host"    : null,
    "dialect" : null
  }
};