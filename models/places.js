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
  pic: { type: String, default: "images/squat.jpg" },
  cuisines: { type: String, required: true },
  city: { type: String, default: "West Nowhere" },
  state: { type: String, default: "Hicksville" },
  founded: {
    type: Number,
    min: [1673, "Man ur old"],
    max: [
      new Date().getFullYear(),
      "Yo no time travelling, this year or earlier",
    ],
    default: 2022,
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

//Helper methods
placeSchema.methods.showEstablished = function () {
  return `${this.name} has been serving somewhat edible food since ${this.founded} in ${this.city}, ${this.state}`;
};

//Export schema
module.exports = mongoose.model("Place", placeSchema);
