import mongoose from "mongoose";
export class Database {
  /**
   * Import MongoClient & connexion à la DB
   */
  const url = "mongodb://localhost:27017";
  const dbName = "wrestlingApi";
  let db;
  mongoose.connect(url, function (err, client) {
    console.log("Connected successfully to MongoDB Server");
    db = client.db(dbName);
    database.db = db;
  });
}

export default connect;
