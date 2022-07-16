/*
SHOULDN'T NEED THIS ANYMORE: just commenting it out for now as a safety net
(module.exports = [
  {
    name: "H-Thai-ML",
    city: "Seattle",
    state: "WA",
    cuisines: "Thai, Pan-Asian",
    pic: "/images/thaifood.jpg",
    id: 0,
  },
  {
    name: "Coding Cat Cafe",
    city: "Phoenix",
    state: "AZ",
    cuisines: "Coffee, Bakery",
    pic: "/images/coffee.jpg",
    id: 1,
  },
];
*/

//Dependencies
const mongoose = require("mongoose");

//Schema
const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: { type: String, default: "/images/squat.jpg" },
  cuisines: { type: String, required: true },
  city: { type: String, default: "West Nowhere" },
  state: { type: String, default: "Hicksville" },
  founded: Number,
});

//Export schema
module.exports = mongoose.model("Place", placeSchema);
