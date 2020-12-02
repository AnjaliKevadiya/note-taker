const router = require("express").Router();
const store = require("../db/store");

router.get("/notes", function(req, res) {
    store
        .getNotes()
        .then((notes) => res.json(notes))
        .catch((err) => res.status(500).json(err));
});

router.post("/notes", function(req, res) {

    console.log(res.json);
    store
        .addNote()
        .then((note) => res.json(note))
        .catch((err) => res.status(500).json(err));

    // let id;
    // if(notesData.length > 0) {
    //     id = notesData[notesData.length - 1].id + 1;
    // } else {
    //     id = 1
    // }
    // req.body.id = id;
    // notesData.push(req.body);
    // console.log("data" + JSON.stringify(notesData));
    // res.json(true);
});

router.delete("/notes/:id", function(req, res) {
    console.log("delete data" + req.body);
});

module.exports = router;