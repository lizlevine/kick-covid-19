const router = require('express').Router();
const postControllers = require('../../controllers/post.contollers');

router
    .route('/')
    .get(postControllers.getAll)
    .post(postControllers.create);

router 
    .route('/:id')
    .get(postControllers.getOne)
    .put(postControllers.updateOne)
    .delete(postControllers.deleteOne);

//Needs Review
router
    .route('/:id/answers')
    .get(postControllers.getAnswers)
    .post(postControllers.addAnswer);


module.exports = router;

