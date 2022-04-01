//Load dependencies
const express = require("express");
const Database = require("./src/core/database");
const Router = require("./src/routes/index");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerOptions = require("./swagger");
const cors = require("cors");

require("dotenv").config();

//Init app and set port
const app = express();
const port = process.env.PORT || 3000;
//Send html index
app.get("/", (req, res) => {
  res.send("api works");
});

//Cors
app.use(cors());

//Set parser middleware
app.use(express.json());
app.usr;

//Set router with endpoints
app.use("/api", Router);

//Swagger
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Database connection
Database.connect().then(() => {
  //Listen to port
  app.listen(port, () => {
    console.log("App is listening on port " + port);
  });
});
