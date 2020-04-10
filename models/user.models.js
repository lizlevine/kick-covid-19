// user's profile model. Arrays set up to handle multiple posts & answers to
// same user (lines 27, 29)
const mongoose = require("mongoose");
const brypt = require('bcrypt');
SALT_WORK_FACTOR = 10;
// const Post = require("post.models");
// const Answer = require("answer.models");

let Schema = mongoose.Schema;

let UserSchema = new Schema({
  fullName: {
    type: String,
    required: false
  },
  userName: {
    type: String,
    required: true,
    index: { unique: true }
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

UserSchema.pre(save, function(next) {
  var user = this;
  if (!user.isModified('password')) return next();

  brypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

let User = mongoose.model("User", UserSchema);

module.exports = User;
