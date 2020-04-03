const db = require('../models');
const crudControllers = require('../utils/crudControllers');

module.exports = crudControllers(db.User);

