const User = require("./user.model");

const Controller = {
  getAll: (req, res) => {
    const user = new User();
    user.getAll().then((results) => {
      res.send(results);
    });
  },
  getOne: (req, res) => {
    const user = new User();
    user.getOne(req.params.id).then((results) => {
      if (results) {
        res.send(results);
      } else {
        res.sendStatus(404);
      }
    });
  },
  create: (req, res) => {
    const user = new User();
    user.create(req.body).then((results) => {
      if (results) {
        res.json(results).status(201);
      } else {
        res.sendStatus(404);
      }
    });
  },
  login: (req, res) => {
    const user = new User();
    user.login(req.body).then((results) => {
      if (results) {
        res.send(results);
      } else {
        res.sendStatus(404);
      }
    });
  },
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
