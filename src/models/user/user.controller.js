const User = require("./user.model");

const Controller = {
  getAll: (req, res) => {
    const user = new User();
    user.getAll().then((results) => {
      res.send(results);
    });
  },
  create: (req, res) => {},
};

module.exports = Controller;

/* 
class ControllerC {
  getAll(req, res) {
    res.send("get all users");
  }
}

module.exports = new ControllerC();
 */
