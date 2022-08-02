const { Users } = require("../../models");
const decryptPassword = require("../encrypt-decrypt/decrypt");
const jwt = require("jsonwebtoken");

async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Data tidak boleh ada yang kosong");
    }

    let validateUser = await Users.findOne({
      where: { email: email.toLowerCase() },
    });

    if (validateUser) {
      let checkDecryptPassword = await decryptPassword(
        validateUser.password,
        password
      );
      if (checkDecryptPassword) {
        let userData = {
          id: validateUser.id,
        };
        let token = jwt.sign(userData, "s3cr3t");
        res.status(200).json({
          access_token: token,
        });
      } else {
        res.status(401).json({ message: "Email atau password salah" });
      }
    } else {
      res.json({ message: "Akun belum terdaftar" });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
}

module.exports = login;
