const router = require("express").Router();
const answerControllers = require("../../controllers/answer.controllers");

router.route("/").get(answerControllers.findAll).post(answerControllers.create);

router
  .route("/:id")
  .get(answerControllers.findById)
  .put(answerControllers.update)
  .delete(answerControllers.remove);

module.exports = router;
