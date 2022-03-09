const Database = require("../../core/database");
const { ObjectId } = require("mongodb");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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

  create(data) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(data.password, salt);
    data.password = hash;
    return new Promise((resolve, reject) => {
      this.collection.insertOne(data, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  getOne(id) {
    return this.collection.findOne({
      _id: ObjectId(id),
    });
  }

  async login(data) {
    const getToken = await this.collection
      .findOne({
        username: data.username,
      })
      .then(async (storedUser) => {
        if (storedUser) {
          let token = await bcrypt.compare(data.password, storedUser.password);
          if (token) {
            var privateKey = process.env.TOKEN_SECRET;
            let token = jwt.sign(
              { username: data.username, id: storedUser._id },
              privateKey,
              {
                expiresIn: "1h",
              }
            );
            return { token };
          } else {
            return null;
          }
        }
      });
    return getToken;
  }
}

module.exports = User;
