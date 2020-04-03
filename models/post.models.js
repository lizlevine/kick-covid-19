// post model: line 9 setup as array for multiple answers to same post

const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let PostSchema = new Schema({
  body: String,
  answers: [{ type: Schema.Types.ObjectId, ref: "Answer" }],
  user_id: { type: Schema.Types.ObjectId, ref: "User" }
});

let Post = mongoose.model("Post", PostSchema);

module.exports = Post;
