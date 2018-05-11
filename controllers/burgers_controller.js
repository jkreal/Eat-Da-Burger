var burger = require('../models/burger');
var orm = require('../config/orm');

module.exports = function (app) {

	app.get('/', function (req, res) {
		orm.selectAll(function (result) {
			orm.selectAll(function (result2) {
				res.render("index", {
					burgers: result,
					devoured_burgers: result2
				});
			}, false);
		}, true);

	});

	app.get('/api/getburgers', function (req, res) {
			//get burgers api
			orm.selectAll(function(result) {
				res.json(result);
			});
		});

	app.post('/api/newburger', function (req, res) {
		//post new burger api
		orm.insertOne(function(result) {

		});
	});

	app.put('/api/updateburger', function (req, res) {
		//update a burger api
	});

}