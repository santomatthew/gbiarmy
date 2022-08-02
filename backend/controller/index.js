module.exports = {
  hello: require("./user/hello"),

  // Information
  getInformations: require("../controller/information/getinformations"),

  // User
  register: require("../controller/user/register"),
  login: require("../controller/user/login"),
};
