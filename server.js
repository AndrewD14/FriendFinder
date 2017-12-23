//importing npm packages to use
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//creates the express server
var app = express();

//defines the port to use
var PORT = process.env.PORT || 8080;

//sets the express server to use body parser to handle json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//tells the server to set a static folder to send all internal files as at the directory of js
app.use('/js', express.static(path.join(__dirname, '/app/public/js')));

//api routes for the express server to use
require("./app/apiRoutes/apiRoutes.js")(app);
require("./app/apiRoutes/htmlRoutes.js")(app);

//starts the listener
app.listen(PORT);