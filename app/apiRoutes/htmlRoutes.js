var path = require("path");

module.exports = function(app) {

    //sends the home page for the http request
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //sends the home page for the http request
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}