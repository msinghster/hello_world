var connection = require('./mysql_connection_module.js');

var con = connection.mysqlConnect();

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE nodejs_db", function (err, result) {
  	if (err) throw err;
    console.log("Database created");
  });
});