//Dependencies
const db = require("../models");

//Create seed data
async function seed() {
  //Get h-thai-ml place
  let place = await db.Place.findOne({ name: "H-Thai-ML" });

  //Create fake comment
  let comment = await db.Comment.create({
    author: "Joe Mama",
    rant: false,
    stars: 3.5,
    content: "Joe? Joe who?",
  });

  //Add comment to place's comment array
  place.comments.push(comment.id);

  //Save place with new comment
  await place.save();

  //Exit
  process.exit();
}

seed();
