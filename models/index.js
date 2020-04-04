// Exporting an object containing all of our models
module.exports = {
  answer: require("./answer.models"),
  post: require("./post.models"),
  user: this.require("./user.models")
};
