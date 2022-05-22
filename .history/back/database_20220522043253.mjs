import mongoose from "mongoose";
export default function connect() {
  /**
   * Import MongoClient & connexion à la DB
   */
  const url = "mongodb://localhost:27017/wrestlingApi";
  mongoose.connect(url, function (err, client) {
    console.log("Connected successfully to MongoDB Server");
  });
}
