var mysql = require('mysql');
var conn = mysql.createConnection({
  host:"databaselaboratorio13.csxhzxobwlpr.us-east-1.rds.amazonaws.com",
  user:"admin",
  password:"Tecsup3560",
  database:"contactos"
});
conn.connect();
module.exports = conn;
