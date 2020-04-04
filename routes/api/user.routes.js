const router = require('express'). Router();
const userControllers = require('../../controllers/user.controllers');

router
  .route('/')
  .get(userControllers.getAll)
  .post(userControllers.create);

router 
  .route('/:id')
  .get(userControllers.getOne)
  .put(userControllers.updateOne)
  .delete(userControllers.deleteOne);

  
module.exports = router;



