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
    username: process.env.DB_TEST_USER,
    password: process.env.DB_TEST_PASSWORD,
    database: process.env.DB_TEST_DATABASE,
    host    : process.env.DB_TEST_HOST,
    port    : process.env.DB_TEST_PORT,
    dialect : process.env.DB_TEST_DIALECT
  },
  production: {
    "username": null,
    "password": null,
    "database": null,
    "host"    : null,
    "dialect" : null
  }
};