const db = require('../models');
const crudControllers = require('../utils/crudControllers');

const controllers = crudControllers(db.post);

//Needs Review
controllers.getAnswers = async (req, res) => {
    const post = await db.post.findAll({ where: { id: req.params.id } });
    const answers = await post.getAnswers();
    res.json(answers);
};

//Needs Review 
controllers.addAnswer = async (req, res) => {
    const { text } = req.body;
    const post = await db.post.findAll({ where: { id: req.params.id } });
    const result = await post.createAnswer({ text });
    res.json(result); 
};

module.exports = controllers;

