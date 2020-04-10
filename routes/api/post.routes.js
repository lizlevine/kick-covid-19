const router = require('express').Router();
const postControllers = require('../../controllers/post.contollers');

router
    .route('/')
    .get(postControllers.findAll)
    .post(postControllers.create);

router 
    .route('/:id')
    .get(postControllers.findById)
    .put(postControllers.update)
    .delete(postControllers.remove);

//Needs Review
router
    .route('/:id/answers')
    .get(postControllers.getAnswers)
    // .post(postControllers.addAnswer);


module.exports = router;

