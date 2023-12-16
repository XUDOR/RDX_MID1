const { Pool } = require('pg');
const pool = new Pool({
  user: 'rodux',
  host: 'localhost',
  database: 'xudor',
  password: '$24U415r&',
  port: 5432,
});

module.exports = pool;
