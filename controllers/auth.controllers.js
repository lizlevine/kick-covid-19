var db = require("../models");
const userController = require("../controllers/user.controllers");

const me = async (req, res) => {
  const user = await db.user.findOne({ _id: req.auth.user.id });
  res.send({ username: user.username });
};

const login = async (req, res) => {
  const { email: enteredEmail, password: enteredPassword } = req.body;
  const user = await db.user.findOne({ email: enteredEmail });
  if (!user) return res.status(404).json({ message: "Invalid Email" });
  const isValidPassword = await user.comparePassword(enteredPassword);
  if (!isValidPassword)
    return res.status(400).json({ message: "Invalid Password" });
  return res.json({ user: user.toAuthJSON() });
};

const signup = async (req, res) => {
  await userController.create(req, res);
};

module.exports = {
  login,
  me,
  signup,
};
