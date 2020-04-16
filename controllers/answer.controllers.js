const db = require("../models");

module.exports = {
  findAll: async (req, res) => {
    db.answer
      .find(req.query)
      .then((dbAnswer) => res.json(dbAnswer))
      .catch((err) => res.status(422).json(err));
  },
  findById: async (req, res) => {
    db.answer
      .findById(req.params.id)
      .then((dbAnswer) => res.json(dbAnswer))
      .catch((err) => res.status(422).json(err));
  },
  create: async (req, res) => {
    // TODO(liz): wrap db lookups in try-catch blocks to handle db errors
    const { post } = req.body;
    const dbPost = await db.post.findById(post);
    // TODO(liz): if the post doesn't exit throw and err

    const dbAnswer = await db.answer.create(req.body);
    // TODO(liz): if db answer does not exist, throw and error
    dbPost.answers.push(dbAnswer._id);
    await dbPost.save();
    res.status(201).json(dbAnswer);
  },
  update: async (req, res) => {
    db.answer
      .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then((dbAnswer) => res.json(dbAnswer))
      .catch((err) => res.status(422).json(err));
  },
  remove: async (req, res) => {
    db.answer
      .findById(req.params.id)
      .then((dbAnswer) => dbAnswer.remove())
      .then((dbAnswer) => res.json(dbAnswer))
      .catch((err) => res.status(422).json(err));
  },
};

/*const crudControllers = require('../utils/crudControllers');

module.exports = crudControllers(db.answer);*/
