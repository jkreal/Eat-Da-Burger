var mysql = require("mysql");

module.exports = connection = mysql.createConnection({
    hostname: 'localhost',
    port: 3306,

    user: 'root',
    password: 'goober',
    database: 'burgers_db'
});