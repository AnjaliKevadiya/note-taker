const util = require("util");
const fs = require("fs");

const { v1: uuidv1 } = require('uuid');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {

    read() {
        return readFileAsync("db/db.json", "utf8");
    }

    write(notes) {
        return writeFileAsync("db/db.json", JSON.stringify(notes));
    }

    // function to get all notes
    getNotes() {
        return this.read().then((notes) => {
            let parsedNotes;
            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                parsedNotes = [];
            }
            return parsedNotes;
        });
    }

    // function which takes single note as input parameter
    addNote(note) {

        // destructing title and text from note
        const { title, text } = note;

        // if either title or text is empty throw an error
        if (!title || !text) {
            throw new Error("Note title and text cannot be blank");
        }

        // Add a unique id to the note using uuid package
        const newNote = { title, text, id: uuidv1() };

        // Get all notes, add the new note, write all the updated notes, return the newNote
        return this.getNotes()
            .then((notes) => [...notes, newNote])
            .then((updatedNotes) => this.write(updatedNotes))
            .then(() => newNote);
    }

}

module.exports = new Store();