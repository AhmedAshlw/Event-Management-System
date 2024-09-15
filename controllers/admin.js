const express = require("express");
const { isAdmin } = require("../middleware/is-Admin");

const router = express.Router();

router.get("/", isAdmin, (req, res) => {
  res.render("admin.ejs");
});

module.exports = router;
