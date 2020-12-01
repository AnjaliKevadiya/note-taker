const router = require("express").Router();
const store = require("../db/store");

router.get("/api/notes", function(req, res) {
    store
        .getNotes()
        .then((notes) => res.json(notes))
        .catch((err) => res.status(500).json(err));
});

router.post("/api/notes", function(req, res) {

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

router.delete("/api/notes/:id", function(req, res) {
    console.log("delete data" + req.body);
});

module.exports = router;