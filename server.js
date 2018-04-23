// Dependencies
// =============================================================
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var helpers = require("handlebars-helpers");
var math = helpers.math();

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// app.use('/static', express.static('public'));
app.use(express.static('app/public'));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});