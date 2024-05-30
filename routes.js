const router = require("express").Router();

router.get("/", (req, res) => {
  res.send({
    status: "successfully",
    message: "Welcome to my website",
  });
});

router.get("/home", (req, res) => {
  res.json("Home page");
});

router.get("/about", (req, res) => {
  res.json("About Page");
});

module.exports = router;
