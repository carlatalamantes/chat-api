const router = require("express").Router();
const userController = require("./user.controller");

/* router.get("/users", (req, res) => {
  res.send("get users");
}); */

router.get("/users", userController.getAll);

router.post("/users", userController.create);

module.exports = router;
