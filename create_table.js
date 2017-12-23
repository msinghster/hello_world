var connection = require('./mysql_connection_module.js');

var con = connection.mysqlConnect();

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))", function (err, result) {
  	if (err) throw err;
    console.log("Table created");
  });
});