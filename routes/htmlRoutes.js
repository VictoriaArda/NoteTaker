// DEPENDENCIES

const path = require("path");
const router = require("express").Router();

// ==========
// ROUTES
// ==========

// HTML GET Requests

// Get notes.html if the url is localhost:8484/notes
router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// If no matching route is found default to home
router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;