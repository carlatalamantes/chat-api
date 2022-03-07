const { MongoClient } = require("mongodb");
const mongoUrl =
  "mongodb+srv://admincarla:kFJfvWxwu2avGLvH@chat-api.enidg.mongodb.net/chat-api?retryWrites=true&w=majority";

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
