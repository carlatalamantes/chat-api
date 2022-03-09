const Database = require("../../core/database");
const { ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");
const res = require("express/lib/response");
require("dotenv").config();
//Siempre clase por herencia, controlador y funciones de mongoose
class Channel {
  collection;
  constructor() {
    //Set collection
    this.collection = Database.collection("channels");
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

  create(data, token) {
    return new Promise((resolve, reject) => {
      var decodedToken = jwt.verify(
        token,
        process.env.TOKEN_SECRET,
        function (err, decoded) {
          if (err) {
            return null;
          } else {
            return decoded;
          }
        }
      );
      if (decodedToken) {
        var obj = {
          name: data.name,
          description: data.description,
          members: [decodedToken.id],
          owner: decodedToken.id,
        };
        this.collection.insertOne(obj, (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
      }
    });
  }

  getOne(id) {
    return this.collection.findOne({
      _id: ObjectId(id),
    });
  }

  createLink(channelid, token) {
    return new Promise(async (resolve, reject) => {
      var decodedToken = jwt.verify(
        token,
        process.env.TOKEN_SECRET,
        function (err, decoded) {
          if (err) {
            return null;
          } else {
            return decoded;
          }
        }
      );

      if (decodedToken) {
        let channel = await this.getOne(channelid);
        if (channel?.owner == decodedToken.id) {
          let res = await this.collection.updateOne(
            { _id: ObjectId(channel._id) },
            {
              $set: { url: `www.localhost:3001/channels/join/${channel._id}` },
            }
          );
          resolve(res);
        } else {
          reject();
        }
      }
    });
  }

  joinChannel(channelid, token) {
    return new Promise(async (resolve, reject) => {
      var decodedToken = jwt.verify(
        token,
        process.env.TOKEN_SECRET,
        function (err, decoded) {
          if (err) {
            return null;
          } else {
            return decoded;
          }
        }
      );

      if (decodedToken) {
        let channel = await this.getOne(channelid);
        console.log(channel);
        if (channel) {
          let res = await this.collection.updateOne(
            { _id: ObjectId(channel._id) },
            {
              $push: { members: decodedToken.id },
            }
          );
          resolve(res);
        } else {
          reject();
        }
      }
    });
  }
}

module.exports = Channel;
