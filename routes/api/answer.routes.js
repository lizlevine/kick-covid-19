const router = require('express').Router();
const answerControllers = require('../../controllers/answer.controllers');

router 
    .route('/')
    .get(answerControllers.getAll)
    .post(answerControllers.create);

router
    .route('/:id')
    .get(answerControllers.getOne)
    .put(answerControllers.updateOne)
    .delete(answerControllers.deleteOne);

module.exports = router;