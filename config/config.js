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
    dialect:  process.env.DB_DIALECT_TEST,
  }
};