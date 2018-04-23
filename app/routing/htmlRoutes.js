var path = require("path");
var exphbs = require("express-handlebars");
var friends = require("../data/friends.js");
var questions = require("../data/questions.js");

module.exports = function (app) {

  app.get("/", function (req, res) {
    res.render("home", {
      pageTitle: "Finder",
      fnds: friends.friends
    });
  });

  app.get("/survey", function (req, res) {
    res.render("survey", {
      pageTitle: "Survey",
      quest: questions.questions
    });
  });

}