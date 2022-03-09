const Router = require("express").Router();
const userRoutes = require("../modules/user/user.routes");
const channelRoutes = require("../modules/channel/channel.routes");

Router.use("/users", userRoutes);
Router.use("/channels", channelRoutes);

module.exports = Router;
