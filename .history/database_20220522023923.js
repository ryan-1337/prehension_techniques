const database = {}


database.connect = async () => {
  /**
   * Import MongoClient & connexion à la DB
   */
  import mongoose from "mongoose";
  const url = "mongodb://localhost:27017";
  const dbName = "wrestlingApi";
  let db;
  MongoClient.connect(url, function (err, client) {
    console.log("Connected successfully to MongoDB Server");
    db = client.db(dbName);
    database.db = db;
  });
}

export default database