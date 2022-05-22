import mongoose from "mongoose";
export class Database {
  /**
   * Import MongoClient & connexion à la DB
   */
  constructor(url, dbName) {
  this.url = "mongodb://localhost:27017";
  this.dbName = "wrestlingApi";
  }
  connect() {
  mongoose.connect(url, function (err, client) {
    console.log("Connected successfully to MongoDB Server");
    db = client.db(dbName);
    database.db = db;
  });
}
}

export default connect;
