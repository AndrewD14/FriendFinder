var people = require("../data/friends.js");

module.exports = function(app) {

    //sends the json of the friends array for the http request
    app.get("/api/friends", function(req, res){
        res.json(people.people);
    });

    //sends the json of the friends array for the http request
    app.post("/api/friends", function(req, res){
        var selectedUser = {
            index: -1,
            score: 100
        };
        var scores = req.body.scores;

        for(i in people.people){
            var currentScore = 0;
            for(j in people.people[i].scores){
                currentScore += Math.abs(scores[j]-people.people[i].scores[j]);
            }

            if(selectedUser.index === -1){
                selectedUser.score = currentScore;
                selectedUser.index = i;
            }
            else if(selectedUser.score > currentScore){
                selectedUser.score = currentScore;
                selectedUser.index = i;
            }
        }

        res.json({name: people.people[selectedUser.index].name,
            photo: people.people[selectedUser.index].photo
        });
    });
}