const db = require('../models');

module.exports = { 
    findAll: async (req, res) => {
        db.answer.find(req.query)
        .then(dbAnswer => res.json(dbAnswer))
        .catch(err => res.status(422).json(err));
    },
    findById: async (req, res) => {
        db.answer.findById(req.params.id)
        .then(dbAnswer => res.json(dbAnswer))
        .catch(err => res.status(422).json(err));
    },
    create: async (req, res) => {
        db.answer.create(req.body)
        .then(dbAnswer => res.json(dbAnswer))
        .catch(err => res.status(422).json(err));
    },
    update: async (req, res) => {
        db.answer.findOneAndUpdate({ id: req.params.id }, req.body)
        .then(dbAnswer => res.json(dbAnswer))
        .catch(err => res.status(422).json(err));
    },
    remove: async (req, res) => {
        db.answer.findById(req.params.id)
        .then(dbAnswer => dbAnswer.remove())
        .then(dbAnswer => res.json(dbAnswer))
        .catch(err => res.status(422).json(err));
    }
};













/*const crudControllers = require('../utils/crudControllers');

module.exports = crudControllers(db.answer);*/

