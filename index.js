//Load dependencies
const express = require("express");
const Database = require("./src/core/database");
const userRoutes = require("./src/models/user/user.routes");

//Init app
const app = express();

//Set endpoints
app.get("/", (req, res) => {
  res.send("api works");
});

app.use("/api", userRoutes);

//Database connection
Database.connect().then(() => {
  //Listen to port
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log("App is listening on port " + port);
  });
});
