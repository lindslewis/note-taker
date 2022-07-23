const express = require('express');
const path = require("path");
const noteData = require('./db.json')

const app = express();
const PORT = process.env.PORT || 3000;

// middleware for find static assets
app.use(express.static("public"));

// // middleware for parsing JSON and urlencoded form data

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/api', api);

const allRoutes = require("./notes")
app.use(allRoutes);


// the file path for the index.html may not be right, watch that for later errors
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get('/api/notes', (req, res) =>
res.json(noteData))

app.post('/api/notes', (req, res) =>
res.json(noteData))


app.listen(PORT, () => {
    console.log("listenin to port " + PORT);
})

// http://localhost:PORT