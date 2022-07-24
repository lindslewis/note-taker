const express = require("express");
const router = express.Router();
const fs = require('fs');
const uuid = require("./helpers/uuid");
// const { readAndAppend } = require('file thin')

// doesn't feel right, as this is done in the index...?
// const submitNote = document.querySelector('.save-note')

// const uuid maybe???

router.get("/", (req, res) =>  {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if(err) {
            throw err;
        } else {
            const notes = JSON.parse(data);
            res.json(notes)
        }
    });
});

router.post("/", (req, res) => {
    console.log(req.body);
    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuid()
        }
        // newNote.push(notes)
        // readAndAppend(newNote, './db/db.json');
    }

    // readAndAppend(newNote, './db/db.json');



        // // title: noteTitle.value,
        // // text: noteText.value
        // id: req.body.id,
        // title: req.body.title,
        // text: req.body.text,
    // };

    // the saving function needs to happen here I think
    fs.readFileSync("./db/db.json", "utf8", (err, data) => {
        if (err) {
            throw err;
        } else {
            const notes = JSON.parse(data);
            notes.push(newNote);
            fs.writeFileSync(
                "./db/db.json",
                JSON.stringify(notes, null, 4),
                (err, data) => {
                    if (err) {
                        throw err;   
                    }
                    res.json({data: req.body, message: "You've successfully add a new note!"});
                }
            )
        }
    })
})

// router.use("/api/notes", allRoutes)

module.exports = router;