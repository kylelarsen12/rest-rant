//Required modules
const express = require("express");
const app = express();
require("dotenv").config();

//Route through places.js
app.use("/places", require("./controllers/places"));

//homepage route
app.get("/", (req, res) => {
  res.send("Hello World");
});

//404 route
app.get("*", (req, res) => {
  res.status(404).send("<h1>Whoops, 404 page not found</h1>");
});

app.listen(process.env.PORT);
