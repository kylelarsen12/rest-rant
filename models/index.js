//Dependencies
const mongoose = require("mongoose");

//connect to mongodb
mongoose.connect(process.env.MONGO_URI, {
  useNewURLParser: true,
  useUnifiedTopology: true,
});

//Export
module.exports.Place = require("./places");
