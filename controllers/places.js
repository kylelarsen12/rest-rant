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

//POST index (update places after edit form)
router.post("/", (req, res) => {
  if (!req.body.city) {
    req.body.city = undefined;
  }
  if (!req.body.state) {
    req.body.state = undefined;
  }
  if (!req.body.pic) {
    req.body.pic = undefined;
  }
  db.Place.create(req.body)
    .then(() => res.redirect("/places"))
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
});

//NEW place
router.get("/new", (req, res) => {
  res.render("places/new");
});

//SHOW place by id
router.get("/:id", (req, res) => {
  db.Place.findById(req.params.id)
    .then((place) => {
      res.render("places/show", { place });
    })
    .catch((err) => {
      console.log("ERROR", err);
      res.render("error404");
    });
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
