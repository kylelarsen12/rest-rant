//Create/export router
const router = require("express").Router();
const places = require("../models/places.js");

//GET Index route
router.get("/", (req, res) => {
  res.send("GET /places stub");
});

//POST index
router.post("/", (req, res) => {
  res.send("POST /places stub");
});

//NEW
router.get("/new", (req, res) => {
  res.send("GET /places/new stub");
});

//GET /:id
router.get("/:id", (req, res) => {
  res.send("GET /places/:id stub");
});

//PUT /:id
router.put("/:id", (req, res) => {
  res.send("PUT /places/:id stub");
});

//DELETE
//prettier-ignore
router.delete('/:id', (req, res) => {
  res.send("DELETE /places/:id stub")
  }
);

//EDIT
router.get("/:id/edit", (req, res) => {
  res.send("GET /:id/edit form stub");
});

module.exports = router;
