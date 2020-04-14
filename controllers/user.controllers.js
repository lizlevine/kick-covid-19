const db = require("../models");

module.exports = {
  findAll: async (req, res) => {
    db.user
      .find(req.query)
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(422).json(err));
  },
  findById: async (req, res) => {
    db.user
      .findById(req.params.id)
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(422).json(err));
  },
  create: async (req, res) => {
    db.user
      .create(req.body)
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(422).json(err));
  },
  update: async (req, res) => {
    console.log(req.body);
    db.user
      .findByIdAndUpdate(req.params.id, req.body, { new: true, upsert: true })
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(422).json(err));
  },
  remove: async (req, res) => {
    db.user
      .findById(req.params.id)
      .then((dbUser) => dbUser.remove())
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(422).json(err));
  },
};

//IGNORE
//const crudControllers = require('../utils/crudControllers');

//const controllers = crudControllers(db.user);

/*controllers.create = async (req, res) => {
    const user = await db.user.create(req.body);
    res.json (user);
}
module.exports = controllers;*/
