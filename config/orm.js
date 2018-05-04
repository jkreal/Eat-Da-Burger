require("./connection");

module.exports = {

    selectAll: function () {
        connection.query('SELECT * FROM burgers', function (err, res) {
            if (err) throw err;

            console.log(res[0].id);
        });
    },

    insertOne: function (burgerName, devoured) {
        connection.query('INSERT INTO burgers (burger_name, devoured) VALUES ?', [[[burgerName, devoured]]], function (err, res) {
            if (err) throw err;

            res.send(res.affectedRows);
        });
    },

    updateOne: function (id, burgerName, devoured) {
        var query = 'UPDATE burgers ' + 
                    'SET burgerNAME = ?' +
                    'WHERE id = ?'
        connection.query(query, function (err, res) {
            if (err) throw err;

            res.send(res.affectedRows);
        });
    }
}