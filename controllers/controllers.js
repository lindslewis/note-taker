const express = require("express");
const router = express.Router();

const notesRoutes = require("./notesController");
router.use("/api/notes", notesRoutes);

module.exports = router;
