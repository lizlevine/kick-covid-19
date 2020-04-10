const router = require("express").Router();
const userControllers = require("../../controllers/user.controllers");

router.route("/").get(userControllers.findAll).post(userControllers.create);

router
  .route("/:id")
  .get(userControllers.findById)
  .put(userControllers.update)
  .delete(userControllers.remove);

module.exports = router;
