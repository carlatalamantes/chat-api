const router = require("express").Router();
const controller = require("./user.controller");

/* router.get("/users", (req, res) => {
  res.send("get users");
}); */

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", controller.create);
router.post("/login", controller.login);

module.exports = router;
