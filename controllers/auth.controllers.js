var db = require("../models");

const me = async (req, res) => {
  const user = await db.user.findOne({ $where: { id: req.auth.user.id } });
  res.send({ user });
};

const login = async (req, res) => {
  const { email: enteredEmail, password: enteredPassword } = req.body;
  const user = await db.user.find(null).findOne({
    where: { email: enteredEmail },
  });
  const password = await db.user.find(null).findOne({
    where: { password: enteredPassword },
  });

  if (!user, !password) return res.status(404).json({ message: "Invalid Credentials" });

  /*const password = await db.user.find(null).findOne({
    where: { password: enteredPassword },
  });
  if (!isPasswordCorrect)
    return res.status(400).json({ message: "Incorrect password" });*/

  return res.json({ token: user.generateJWT(), user });
};

module.exports = {
  login,
  me,
};
