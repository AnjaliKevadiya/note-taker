const util = require("util");
const fs = require("fs");

const uuidv1 = require("uuid");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {

    // read() {
    //     return readFileAsync("db/db.json", "utf8");
    // }

    // write(notes) {
    //     return writeFileAsync("db/db.json", JSON.stringify(notes));
    // }

    // // DEFINE A FUNCTION getNotes(). INSIDE THE FUNCTION ...
    // // 1. CALLS read() TO READ DATA FROM THE FILE AND CONVERT THE DATA 
    // //    FROM THE FILE INTO AN ARRAY OF OBJECTS USING JSON.parse() AND STORE IT TO A VARIABLE
    // // 2. THEN RETURN THE ARRAY TO THE CALLER
    // // 3. IF THE DATA IS EMPTY THEN RETURN AN EMPTY ARRAY TO THE CALLER

    // getNotes() {
        
    //     return this.read().then((notes) => {
    //         let parsedNotes;

    //         try {
    //             parsedNotes = [].concat(JSON.parse(notes));
    //         } catch (err) {
    //             parsedNotes = [];
    //         }
    //         return parsedNotes;
    //     });
    // }
}

module.exports = new Store();