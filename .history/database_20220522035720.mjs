const database = {}

export default database.connect = async () => {
  /**
   * Import MongoClient & connexion à la DB
   */
  const mongoose = require("mongoose");
  const url = "mongodb://localhost:27017";
  const dbName = "wrestlingApi";
  let db;
  mongoose.connect(url, function (err, client) {
    console.log("Connected successfully to MongoDB Server");
    db = client.db(dbName);
    database.db = db;
  });
}
