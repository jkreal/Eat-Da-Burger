var mysql = require("mysql");

module.exports = connection = mysql.createConnection({
    host: 'ec2-23-23-180-121.compute-1.amazonaws.com',

    user: 'ebclfpgyfswrck',
    password: 'b2161ea42ed6ca847f31ca6eea3d7ba044f0572fb4178aba18576080e172626d',
    database: 'd6eklgmmi5kam3',
    port: 5432
});

// module.exports = connection = mysql.createConnection({
//     hostname: 'localhost',
//     port: 3306,

//     user: 'root',
//     password: 'goober',
//     database: 'burgers_db'
// });
