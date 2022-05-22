import mongoose from "mongoose";
async function connectToDb() {
  /**
   * Import MongoClient & connexion à la DB
   */
  const url = "mongodb://localhost:27017/wrestlingApi";
  mongoose.connect(url, function (err) {
    console.log("Connected successfully to MongoDB Server");
    dbSchema();
  });
}


const { Schema } = mongoose;

async function dbSchema() {
   new Schema({
  title:  String, // String is shorthand for {type: String}
  body:   String,
  date: { type: Date, default: Date.now },
});
}

export default connectToDb;