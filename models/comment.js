//Dependencies
const mongoose = require("mongoose");

//schema
let commentSchema = new mongoose.Schema({
  author: { type: String, default: "Anonymouse" },
  rant: { type: Boolean, default: false },
  stars: { type: Number, required: true },
  content: { type: String, default: "" },
});

//export
module.exports = mongoose.model("Comment", commentSchema);
