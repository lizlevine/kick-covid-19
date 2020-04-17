const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
SALT_WORK_FACTOR = 10;
// const Post = require("post.models");
// const Answer = require("answer.models");

let Schema = mongoose.Schema;

let UserSchema = new Schema({
  username: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
    index: true,
  },
  email: {
    type: String,
    match: [/\S+@\S+\.\S+/, "is invalid"],
    lowercase: true,
    required: true,
    unique: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
  wantsupdates: {
    type: Boolean,
    required: true,
  },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  answers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Answer" }],
});

var uniqueValidator = require("mongoose-unique-validator");
UserSchema.plugin(uniqueValidator, { message: "is already taken." });

UserSchema.pre("save", function (next) {
  var user = this;
  if (!user.isModified("password")) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password
  );
};

UserSchema.methods.generateJWT = function () {
  var today = new Date();
  var exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  return jwt.sign(
    {
      id: this.id,
      username: this.username,
      exp: parseInt(exp.getTime() / 1000)
    },
    process.env.JWT_SECRET
  );
};

UserSchema.methods.toAuthJSON = function () {
  return {
    username: this.username,
    email: this.email,
    token: this.generateJWT()
  };
};

let User = mongoose.model("User", UserSchema);

module.exports = User;
