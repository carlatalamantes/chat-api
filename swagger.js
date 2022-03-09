require("dotenv").config();
const port = process.env.PORT;

module.exports = {
  swaggerDefinition: {
    swagger: "2.0",
    info: {
      title: "ITESO Chat API",
      description: "A live chat web app",
      version: "1.0.0",
      servers: ["https://localhost:" + port],
    },
  },
  apis: [
    "./src/modules/user/user.routes.js",
    "./src/modules/channel/channel.routes.js",
  ],
};
