const pgp = require('pg-promise');

const connection = {
  host: 'localhost',
  port: 5432,
  database: 'to-do-list'
}

const db = pgp(connection)

module.exports = db;
