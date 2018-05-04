
var burger = require('../models/burger');

module.exports = function (app) {

    app.get('/', function(req, res) {
        res.render("index");
    });

    app.get('/api/getburgers', function(req, res) {
        //get burgers api
        burger.insertBurger(req.body);
    });

    app.post('/api/newburger', function(req, res) {
        //post new burger api
    });

    app.post('/api/updateburger', function(req, res) {
        //update a burger api
    });

}