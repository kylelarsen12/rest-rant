//Required modules
const express = require("express");
const app = express();
require("dotenv").config();
const methodOverride = require("method-override");

//MIDDLEWARE
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//Route through places.js
app.use("/places", require("./controllers/places"));

//homepage route
app.get("/", (req, res) => {
  res.render("home");
});

//404 route
app.get("*", (req, res) => {
  res.render("error404");
});

app.listen(process.env.PORT || 3000);
