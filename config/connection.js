var mysql = require("mysql");

module.exports = connection =  mysql.createConnection({
    hostname: 'us-cdbr-iron-east-04.cleardb.net',
    user: 'b8519a36521607',
    database: 'heroku_0b07429bb8e153'
});