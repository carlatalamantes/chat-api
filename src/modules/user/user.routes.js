const router = require("express").Router();
const controller = require("./user.controller");

/* router.get("/users", (req, res) => {
  res.send("get users");
}); */

/**
 * @swagger
 *   /api/users:
 *     get:
 *       tags:
 *       - Users
 *       description: Get all users
 *       responses:
 *         200:
 *           description: Array with a list of users
 *
 */
router.get("/", controller.getAll);

/**
 * @swagger
 *   /api/users/{id}:
 *     get:
 *       tags:
 *       - Users
 *       description: Get one user by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The user's unique ID
 *       responses:
 *         200:
 *           description: An object with a single user's data
 */
router.get("/:id", controller.getOne);

/**
 * @swagger
 *   /api/users:
 *     post:
 *       tags:
 *       - Users
 *       description: Create user
 *       responses:
 *         201:
 *           description: An object with a single user's data
 */
router.post("/", controller.create);

/**
 * @swagger
 *   /api/users/login:
 *     post:
 *       tags:
 *       - Users
 *       description: Login
 *       responses:
 *         200:
 *           description: Token
 */
router.post("/login", controller.login);

module.exports = router;
