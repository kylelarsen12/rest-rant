//Create/export router
const router = require("express").Router();

//First route
router.get("/", (req, res) => {
  res.send("GET /places");
});

module.exports = router;
