const Router = require("express").Router();
const userRoutes = require("../modules/user/user.routes");

Router.use("/users", userRoutes);

module.exports = Router;
