// answer model - note line 10 cross references with user
const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let AnswerSchema = new Schema(
  {
    body: String,
    post: { type: Schema.Types.ObjectId, ref: "Post" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    username: String,
  },
  { timestamps: true }
);

//Needs Further Review
/*AnswerSchema.methods.toJSONFor = function(user) {
    return {
        id: this._id,
        body: this.body,
        createdAt: this.createdAt,
        user: this.user.toProfileJSONFor(user)
    };
};*/

let Answer = mongoose.model("Answer", AnswerSchema);

module.exports = Answer;
