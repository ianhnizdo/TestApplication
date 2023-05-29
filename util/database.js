const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'weather-data',
  password: 'LearningSQL26!',
});

//Lets us use promises as opposed to callbacks. Promises handle asynchronous tasks, no nested callbacks.
module.exports = pool.promise();
