//Load dependencies
const express = require("express");
const Database = require("./src/core/database");
const Router = require("./src/routes/index");
require("dotenv").config();

//Init app and set port
const app = express();
const port = process.env.PORT || 3000;
//Send html index
app.get("/", (req, res) => {
  res.send("api works");
});

//Set parser middleware
app.use(express.json());

//Set router with endpoints
app.use("/api", Router);

//Database connection
Database.connect().then(() => {
  //Listen to port
  app.listen(port, () => {
    console.log("App is listening on port " + port);
  });
});
