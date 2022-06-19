import mongoose from "mongoose";
const { Schema, Model } = mongoose;

/**
 * Connection to database (Mongodb) with mongoose
 */
export async function connectToDb() {
  const url = "mongodb://localhost:27017/wrestlingApi";
  mongoose.connect(url, function (err) {
    console.log("Connected successfully to MongoDB Server");
  });
}

/**
 * Schema : user
 */
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  role: {
    type: String,
    default: "Basic",
    required: true,
  },
});

export const User = mongoose.model('User', userSchema);

/**
 * Schema : techniques
 */
  const techniquesSchema = new mongoose.Schema({
  title:  String, // String is shorthand for {type: String}
  difficulty: String,
  url: String,
  body:   String,
  date: { type: Date, default: Date.now },
});

export const Techniques = mongoose.model('Techniques', techniquesSchema);
