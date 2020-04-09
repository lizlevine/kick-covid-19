const db = require("../models");
const crudControllers = require("../utils/crudControllers");

const controllers = crudControllers(db.post);

//Needs Review
controllers.getAnswers = async (req, res) => {
  const post = await db.post.findById(req.params.id).populate("answers");
  console.log(post);
  const answers = post.answers;
  res.json(answers);
};

controllers.getAll = async (req, res) => {
  // res.send("test received");
};

//Needs Review
controllers.addAnswer = async (req, res) => {
  const { text } = req.body;
  const post = await db.post.find({ where: { id: req.params.id } });
  const result = await post.createAnswer({ text });
  res.json(result);
};

module.exports = controllers;
