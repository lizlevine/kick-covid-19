// user's profile model. Arrays set up to handle multiple posts & answers to
// same user (lines 27, 29)
const mongoose = require("mongoose");
const Post = require("post.models");
const Answer = require("answer.models");

let Schema = mongoose.Schema;

let UserSchema = new Schema({
  fullName: {
    type: String,
    required: false
  },
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  wantsUpdates: {
    type: Boolean,
    required: true
  },
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],

  answers: [{ type: Schema.Types.ObjectId, ref: "Answer" }]
});

let User = mongoose.model("User", UserSchema);

module.exports = User;
