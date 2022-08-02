const { Users } = require("../../models");
const encryptPassword = require("../encrypt-decrypt/encrypt");

async function register(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.json({ message: "Tidak boleh ada data yang kosong" });
      return;
    }

    res.json({
      name: name,
      email: email,
      password: password,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
}

module.exports = register;
