var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var orm = require("./config/orm");
var bcontroller = require("./controllers/burgers_controller");

var app = express();

var PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/assets', express.static('public/assets'));

orm.selectAll();

app.listen(PORT, function() {
    console.log("server now running on port " + PORT);
});