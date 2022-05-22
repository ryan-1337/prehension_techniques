async function connect() {
  /**
   * Import MongoClient & connexion à la DB
   */
  import mongoose from "mongoose";
  const url = "mongodb://localhost:27017";
  const dbName = "wrestlingApi";
  let db;
  mongoose.connect(url, function (err, client) {
    console.log("Connected successfully to MongoDB Server");
    db = client.db(dbName);
    database.db = db;
  });
}

export default connect