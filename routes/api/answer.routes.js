const router = require("express").Router();
const answerControllers = require("../../controllers/answer.controllers");
const auth = require("../../utils/auth");

router
  .route("/")
  .get(answerControllers.findAll)
  .post(auth.required, answerControllers.create);

router
  .route("/:id")
  .get(answerControllers.findById)
  .put(answerControllers.update)
  .delete(answerControllers.remove);

module.exports = router;
