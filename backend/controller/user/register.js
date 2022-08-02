const { Users } = require("../../models");
const encryptPassword = require("../encrypt-decrypt/encrypt");

async function register(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      throw new Error("Data yang diisi harus lengkap");
    }

    const validateEmail = await Users.findOne({
      where: { email: email.toLowerCase() },
    });

    if (!validateEmail) {
      const newUser = {
        name: name,
        email: email.toLowerCase(),
        password: await encryptPassword(password),
        role_id: 4,
      };
      await Users.create(newUser);
      res.status(201).json({
        message: `Akun dengan email ${newUser.email} berhasil dibuat`,
      });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
}

module.exports = register;
