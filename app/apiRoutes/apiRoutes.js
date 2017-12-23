var people = require("../data/friends.js");

module.exports = function(app) {

    //sends the home page for the http request
    app.get("/api/friends", function(req, res){
        res.json(people.people);
    });
}