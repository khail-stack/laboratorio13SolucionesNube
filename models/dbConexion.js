var mysql = require('mysql');
var conn = mysql.createConnection({
  host:process.env.host,
  user:process.env.user,
  password: process.env.password,
  database: process.env.database,
});
conn.connect();
module.exports = conn;
