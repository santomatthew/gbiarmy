const { Roles } = require("../../models");

async function getInformations(req, res) {
  try {
    const listInformations = await Roles.findAll();
    res.json({ informations: listInformations });
  } catch (error) {
    res.json({ message: error.message });
  }
}

module.exports = getInformations;
