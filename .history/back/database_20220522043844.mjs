import mongoose from "mongoose";
export async function connectToDb() {
  /**
   * Import MongoClient & connexion à la DB
   */
  const url = "mongodb://localhost:27017/wrestlingApi";
  mongoose.connect(url, function (err) {
    console.log("Connected successfully to MongoDB Server");
  });
}

export default connectToDb;
