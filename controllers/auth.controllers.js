var db = require("../models");

const me = async (req, res) => {
  const user = await db.user.findOne({ $where: { id: req.auth.user.id } });
  res.send({ user });
};

const login = async (req, res) => {
  const { email: enteredEmail, password: enteredPassword } = req.body;
  const user = await db.user.findOne({ email: enteredEmail });
  if (!user) return res.status(404).json({ message: "Invalid Email"});
  const isValidPassword = await user.comparePassword(enteredPassword)
  if (!isValidPassword) return res.status(400).json({ message: "Invalid Password"});
    return res.json({user: user.toAuthJSON()});
};

module.exports = {
  login,
  me,
};
