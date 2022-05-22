import mongoose from "mongoose";
const { Schema, Technique } = mongoose;
export async function connectToDb() {
  /**
   * Import MongoClient & connexion à la DB
   */
  const url = "mongodb://localhost:27017/wrestlingApi";
  mongoose.connect(url, function (err) {
    console.log("Connected successfully to MongoDB Server");
  });
}



  const schema = new mongoose.Schema({
  title:  String, // String is shorthand for {type: String}
  difficulty: String,
  body:   String,
  date: { type: Date, default: Date.now },
});

export const Techniques = mongoose.model('Techniques', schema);
