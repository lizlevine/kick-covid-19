const router = require("express").Router();

router.use("/users", require("./user.routes"));
router.use("/posts", require("./post.routes"));
router.use("/answers", require("./answer.routes"));

module.exports = router;
