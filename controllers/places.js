//Create/export router
const router = require("express").Router();
const places = require("../models/places.js");

//First route
router.get("/", (req, res) => {
  res.render("places/index", { places });
});

router.get("/new", (req, res) => {
  res.render("places/new");
});

//SHOW
router.get("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.render("places/show", { place: places[id] });
  }
});

router.post("/", (req, res) => {
  //provide default image if none specified
  if (!req.body.pic) {
    req.body.pic = "/public/images/squat.jpg";
  }
  //default city i am very funny
  if (!req.body.city) {
    req.body.city = "Yourmomshouse";
  }
  //default state haha
  if (!req.body.state) {
    req.body.state = "lmao";
  }
  places.push(req.body);
  res.redirect("/places");
});

module.exports = router;
