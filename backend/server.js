// This is our entry point

const express = require("express");
// to send notes we need to import them
const notes = require("./data/notes");

// importing the dotenv file

const dotenv = require("dotenv");
// configuring the dotenv file
dotenv.config();

const app = express();

// creating API endpoint

app.get("/", (req, res) => {
  res.send("API is running..");
});

// sending notes
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

// for fetching only single node

app.get("/api/notes/:id", (req, res) => {
  // req.params is used to check url for id
  const note = notes.find((n) => n._id === req.params.id);

  res.send(note);
});

// to use the dotenv file just type process.env.port
// but we can store it in varialbe and then use

const PORT = process.env.PORT || 5000; // agr env port available nhi h to 5000 use krlo

app.listen(PORT, console.log(`Server started on port ${PORT}`));
