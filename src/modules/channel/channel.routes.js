const router = require("express").Router();
const controller = require("./channel.controller");

/**
 * @swagger
 *   /api/channels:
 *     get:
 *       tags:
 *       - Channels
 *       description: Get all channels
 *       responses:
 *         200:
 *           description: Array with a list of channels
 *
 */
router.get("/", controller.getAll);

/**
 * @swagger
 *   /api/channels/{id}:
 *     get:
 *       tags:
 *       - Channels
 *       description: Get one channel by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The channels's unique ID
 *       responses:
 *         200:
 *           description: An object with a single channel's data
 */
router.get("/:id", controller.getOne);

/**
 * @swagger
 *   /api/channels:
 *     post:
 *       tags:
 *       - Channels
 *       description: Create channel
 *       responses:
 *         201:
 *           description: An object with a channel's data
 */
router.post("/", controller.create);

/**
 * @swagger
 *   /api/channels/{id}:
 *     post:
 *       tags:
 *       - Channels
 *       description: Create channel
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The channels's unique ID
 *       responses:
 *         201:
 *           description: An object with a channel's data
 */
router.post("/:id", controller.createLink);

/**
 * @swagger
 *   /api/channels/{id}:
 *     post:
 *       tags:
 *       - Channels
 *       description: Join channel
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The channels's unique ID
 *       responses:
 *         201:
 *           description: An object with a channel's data
 */
router.post("/join/:id", controller.joinChannel);

module.exports = router;
