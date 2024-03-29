const mysql = require("mysql");
const connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Nova15star",
  database: "Friends"
});
}

// Make connection
connection.connect(function(err) {
   if (err) {
     console.error("Error connecting: " + err.stack);
     return;
   }
   console.log("Connected as id " + connection.threadId);
  });
 
// Export connection for routing
module.exports = connection;