var mysql = require("mysql");

// module.exports = connection = mysql.createConnection({
//     hostname: 'us-cdbr-iron-east-04.cleardb.net/',
//     port: 3306,

//     user: 'b8519a36521607',
//     password: '',
//     database: 'heroku_0b07429bbd8e153'
// });

module.exports = connection = mysql.createConnection({
    hostname: 'localhost',
    port: 3306,

    user: 'root',
    password: 'goober',
    database: 'burgers_db'
});