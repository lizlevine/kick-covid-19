const router = require("express").Router();

router.use("/api", require("./api"));
router.use("/auth", require("./auth.routes"));

module.exports = router;
