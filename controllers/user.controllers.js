const db = require('../models');
const crudControllers = require('../utils/crudControllers');

const controllers = crudControllers(db.user);
controllers.create = async (req, res) => {
    const user = await db.user.create(req.body);
    res.json (user);
}
module.exports = controllers;

