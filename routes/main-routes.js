const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/", (req, res, next) => {
  let fileExists = fs.existsSync("notes.json");
  if (fileExists) {
    fs.readFile("notes.json", (err, data) => {
      if (err) throw err;
      return res.render("index", {
        title: "HomePage",
        notes: JSON.parse(data),
      });
    });
  } else {
    res.render("index", {
      title: "HomePage",
      notes: []
    });
  }
});

router.post("/note", (req, res, next) => {
  let data = [];
  let fileExists = fs.existsSync("notes.json");
  console.log("does? ", fileExists);
  if (fileExists) {
    fs.readFile("notes.json", (err, notesDB) => {
      if (err) throw err;
      data = JSON.parse(notesDB);
      data.push(req.body);

      fs.writeFile("notes.json", JSON.stringify(data), () => {
        res.status(302);
        res.redirect("/");
      });
    });
  } else {
    data.push(req.body);
    fs.writeFile("notes.json", JSON.stringify(data), () => {
      res.status(302);
      res.redirect("/");
    });
  }
});

module.exports = router;
