const express = require('express');
const path = require("path");
const noteData = require('./db/db.json')
// maybe file path??
const app = express();
const PORT = process.env.PORT || 3000;
const fs = require('fs');
const uuid = require("./helpers/uuid");

// middleware for find static assets
app.use(express.static("public"));

// // middleware for parsing JSON and urlencoded form data

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/api', api);

// const allRoutes = require("./notes")
// app.use(allRoutes);


// the file path for the index.html may not be right, watch that for later errors
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// res.json like this only pulls it one time
app.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) {
            throw err;
        } else {
            const notes = JSON.parse(data);
            res.json(notes)
        }
    });
});

app.post("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) {
            throw err;
        } else {
            const { title, text } = req.body;

            if (title && text) {
                const newNote = {
                    title,
                    text,
                    id: uuid()
                }
                const notes = JSON.parse(data);

                notes.push(newNote);
                fs.writeFile(
                    "./db/db.json",
                    JSON.stringify(notes, null, 4),
                    (err, data) => {
                        if (err) {
                            throw err;
                        }
                        res.json({ data: req.body, message: "You've successfully added a new note!" });
                    }
                )
            }
        }
    })
});

app.delete("/api/notes/:id", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) {
            throw err;
        } else {
            const notes = JSON.parse(data);
            const noteId = req.params.id;
            const updatedNotes = notes.filter(note => note.id !== noteId)
            fs.writeFile(
                "./db/db.json",
                JSON.stringify(updatedNotes, null, 4),
                (err, data) => {
                    if (err) {
                        throw err;
                    }
                    res.json({ data: req.body, message: "You've successfully deleted a note!" });
                }
            )
        }

    })
});

app.listen(PORT, () => {
    console.log("listenin to port " + PORT);
})

// http://localhost:PORT