const db = require("../models");

module.exports = { 
  findAll: async (req, res) => {
      db.post.find(req.query)
      .then(dbPost => res.json(dbPost))
      .catch(err => res.status(422).json(err));
  },
  findById: async (req, res) => {
      db.post.findById(req.params.id)
      .then(dbPost => res.json(dbPost))
      .catch(err => res.status(422).json(err));
  },
  create: async (req, res) => {
      db.post.create(req.body)
      .then(dbPost => res.json(dbPost))
      .catch(err => res.status(422).json(err));
  },
  update: async (req, res) => {
      db.post.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbPost => res.json(dbPost))
      .catch(err => res.status(422).json(err));
  },
  remove: async (req, res) => {
      db.post.findById(req.params.id)
      .then(dbPost => dbPost.remove())
      .then(dbPost => res.json(dbPost))
      .catch(err => res.status(422).json(err));
  }
};




















/*const crudControllers = require("../utils/crudControllers");

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

module.exports = controllers;*/
