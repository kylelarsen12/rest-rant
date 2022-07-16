//Create/export router
const router = require("express").Router();
const db = require("../models");

//GET Index route
router.get("/", (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render("places/index", { places });
    })
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
});

//POST index
router.post("/", (req, res) => {
  db.Place.create(req.body)
    .then(() => res.redirect("/places"))
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
});

//NEW
router.get("/new", (req, res) => {
  res.render("places/new");
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

//GET rants
router.get("/:id/rant", (req, res) => {
  res.send("GET /places/:id/rant stub");
});

//POST rants
router.post("/:id/rant", (req, res) => {
  res.send("POST /places/:id/rant stub");
});

//DELETE rants
router.delete("/:id/rant/:rantID", (req, res) => {
  res.send("DELETE /places/:id/rant/:rantID stub");
});

module.exports = router;
