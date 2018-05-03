var express = require('express');

var app = express();


module.exports = function (app) {

    app.get('/', function(req, res) {
        //Homepage
    });
    
    app.get('/burgers', function(req, res) {
        //burgers devouring page
    });


    app.get('/api/getburgers', function(req, res) {
        //get burgers api
    });

    app.post('/api/newburger', function(req, res) {
        //post new burger api
    });

    app.post('/api/updateburger', function(req, res) {
        //update a burger api
    });

}