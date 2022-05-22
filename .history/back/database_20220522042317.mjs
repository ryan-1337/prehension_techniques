import mongoose from "mongoose";
export class Database {
  /**
   * Import MongoClient & connexion à la DB
   */
  constructor(url) {
  this.url = "mongodb://localhost:27017/wrestlingApi";
  }
  connect() {
  mongoose.connect(this.url, function (err, client) {
    console.log("Connected successfully to MongoDB Server");
  });
}
}

export class Database
