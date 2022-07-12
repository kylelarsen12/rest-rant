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

//EDIT
router.get("/:id/edit", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.render("places/edit", { place: places[id], id });
  }
});

//SHOW
router.get("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.render("places/show", { place: places[id], id });
  }
});

//PUT
router.put("/:id", (req, res) => {
  console.log(req.body);
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[req.params.id]) {
    res.render("error404");
  } else {
    //Check for req.body having valid data
    if (!req.body.pic) {
      req.body.pic = "/images/squat.jpg";
    }

    if (!req.body.city) {
      req.body.city = "Yourmomshouse";
    }

    if (!req.body.state) {
      req.body.state = "lmao";
    }

    places[id] = req.body;
    res.redirect(`/places/${id}`);
  }
});

router.post("/", (req, res) => {
  //provide default image if none specified
  if (!req.body.pic) {
    req.body.pic = "images/squat.jpg";
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

//DELETE
//prettier-ignore
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    places.splice(id, 1);
    //prettier-ignore
    res.status(303).redirect('/places');
  }
});

module.exports = router;
