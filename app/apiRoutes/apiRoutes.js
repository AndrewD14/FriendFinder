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

        //loops through each saved person
        for(i in people.people){
            var currentScore = 0;

            //calculate the matching score
            for(j in people.people[i].scores){
                currentScore += Math.abs(scores[j]-people.people[i].scores[j]);
            }

            //if the first person checked, set as the best match
            if(selectedUser.index === -1){
                selectedUser.score = currentScore;
                selectedUser.index = i;
            }
            //if the score is closer to 0, set as the best match
            else if(selectedUser.score > currentScore){
                selectedUser.score = currentScore;
                selectedUser.index = i;
            }
        }

        //sends a JSON response of the name and link to photo for the html modal
        res.json({name: people.people[selectedUser.index].name,
            photo: people.people[selectedUser.index].photo
        });
    });
}