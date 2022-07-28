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
  if (!req.body.founded) {
    req.body.founded = undefined;
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
  if (!req.body.pic) {
    req.body.pic = undefined;
  }
  db.Place.findById(req.params.id)
    .populate("comments")
    .then((place) => {
      console.log(place.comments);
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
  db.Place.findByIdAndDelete(req.params.id).then((place) => {
    res.redirect("/places")
  }).catch((err) => {console.log(err)
  res.redirect("error404")})
  }
);

//EDIT
router.get("/:id/edit", (req, res) => {
  res.send("GET /:id/edit form stub");
});

//GET rants
router.get("/:id/comment", (req, res) => {
  res.render("places/comment", { id: req.params.id });
});

//CREATE rants
router.post("/:id/comment", (req, res) => {
  console.log(req.body);
  db.Place.findById(req.params.id)
    .then((place) => {
      if (req.body.rant === "on") {
        req.body.rant = "true";
      }
      db.Comment.create(req.body)
        .then((comment) => {
          place.comments.push(comment.id);
          place.save().then(() => {
            res.redirect(`/places/${req.params.id}`);
          });
        })
        .catch((err) => {
          console.log(err);
          res.render("error404");
        });
    })
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
});

//DELETE rants
router.delete("/:id/rant/:rantID", (req, res) => {
  res.send("DELETE /places/:id/rant/:rantID stub");
});

module.exports = router;
