const { MongoClient } = require("mongodb");
require("dotenv").config();
const mongoUrl = process.env.MONGO_URL;

const Database = {
  dbInstance: null,
  connect: () => {
    return new Promise((accept, reject) => {
      MongoClient.connect(
        mongoUrl,
        { useUnifiedTopology: true },
        (err, client) => {
          if (err) {
            console.log("Database connection failed: ", err);
          } else {
            this.dbInstance = client.db();
            accept(client);
          }
        }
      ); //Error first callback
    });
  },
  collection: (name) => {
    return this.dbInstance.collection(name);
  },
};

module.exports = Database;
