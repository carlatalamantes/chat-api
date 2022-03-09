const Channel = require("./channel.model");

const Controller = {
  getAll: (req, res) => {
    const channel = new Channel();
    channel.getAll().then((results) => {
      res.send(results);
    });
  },
  getOne: (req, res) => {
    const channel = new Channel();
    channel.getOne(req.params.id).then((results) => {
      if (results) {
        res.send(results);
      } else {
        res.sendStatus(404);
      }
    });
  },
  create: (req, res) => {
    const channel = new Channel();
    if (!req.headers.authorization) return res.sendStatus(401);
    channel.create(req.body, req.headers.authorization).then((results) => {
      if (results) {
        res.send(results);
      } else {
        res.sendStatus(404);
      }
    });
  },
  createLink: (req, res) => {
    if (!req.headers.authorization) return res.sendStatus(401);
    const channel = new Channel();
    channel
      .createLink(req.params.id, req.headers.authorization)
      .then((results) => {
        if (results) {
          res.send(results);
        } else {
          res.sendStatus(404);
        }
      });
  },
  joinChannel: (req, res) => {
    if (!req.headers.authorization) return res.sendStatus(401);
    const channel = new Channel();
    channel
      .joinChannel(req.params.id, req.headers.authorization)
      .then((results) => {
        if (results) {
          res.send(results);
        } else {
          res.sendStatus(404);
        }
      });
  },
};

module.exports = Controller;
