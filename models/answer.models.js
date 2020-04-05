// answer model - note line 10 cross references with user
const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let AnswerSchema = new Schema({
    body: String,
    post : { type: Schema.Types.ObjectId, ref: "Post" },
    user_id : { type: Schema.Types.ObjectId, ref: "User" }
});

let Answer = mongoose.model("Answer", AnswerSchema);

module.exports = Answer;