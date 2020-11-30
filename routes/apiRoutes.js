//load data
var notesData = require("../db/db.json");

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        res.json(notesData);
    });

    app.post("/api/notes", function(req, res) {

        let id;
        if(notesData.length > 0) {
            id = notesData[notesData.length - 1].id + 1;
        } else {
            id = 1
        }
        req.body.id = id;
        notesData.push(req.body);
        console.log("data" + JSON.stringify(notesData));
        res.json(true);
    });

    // app.delete("/api/notes/:id", function(req, res) {
    //     console.log("delete data" + req.body);
    // });
}