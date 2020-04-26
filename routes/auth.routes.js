const router = require("express").Router();

const authControllers = require("../controllers/auth.controllers");
const auth = require("../utils/auth");

router.get("/me", auth.required, authControllers.me);
router.post("/login", authControllers.login);
router.post("/signup", authControllers.signup);

module.exports = router;
