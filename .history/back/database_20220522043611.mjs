import mongoose from "mongoose";
export async function connect() {
  /**
   * Import MongoClient & connexion à la DB
   */
  const url = "mongodb://localhost:27017/wrestlingApi";
  await mongoose.connect(url, function (err) {
    console.log("Connected successfully to MongoDB Server");
  });
}

export default connect;
