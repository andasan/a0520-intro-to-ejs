const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index", {
      title: "HomePage"
    });
});

router.post("/note", (req, res, next) => {
    console.log(req.body);
    res.status(302);
    res.redirect("/")
});

module.exports = router;
