const Database = require("../../core/database");

//Siempre clase por herencia, controlador y funciones de mongoose
class User {
  collection;
  constructor() {
    //Set collection
    this.collection = Database.collection("users");
  }

  getAll() {
    return new Promise((resolve, reject) => {
      this.collection.find().toArray((err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  create() {}
}

module.exports = User;
