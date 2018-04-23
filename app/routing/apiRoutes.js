var path = require("path");
var exphbs = require("express-handlebars");
var friends = require("../data/friends.js");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    console.log(friends.friends);
    comparisonArray = [];
    // getMatch(req.body.scores);
    res.json(getMatch(req.body.scores));
    friends.friends.push(req.body);
  });

  function getMatch(inputArr) {
    var comparisonArray = [];

    for (let i = 0; i < friends.friends.length; i++) {
      const element = friends.friends[i].scores;
      var total = 0;

      for (let i = 0; i < inputArr.length; i++) {
        var difference = (inputArr[i] - element[i]);
        if (difference < 0) difference *= -1;
        total += difference;
      }

      comparisonArray.push(total);

    }

    var minimumDifference = Math.min(...comparisonArray);
    var friendIndex = comparisonArray.indexOf(minimumDifference);
    friend = friends.friends[friendIndex];
    return friend;

  }

}