//load data
var notesData = require("../db/db.json");

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        res.json(notesData);
    });

    app.post("/api/notes", function(req, res) {

        console.log("data" + req.body);
        notesData.push(req.body);
        res.json(true);
    });
}