import express from "express";
import bodyParser from "body-parser";
import { connectToDb, Techniques } from "../database.mjs";
const app = express();
const port = 3000;

let db = connectToDb();
console.log(connectToDb())
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const items = [
  { name: "bras a la volee", difficulte: "simple" },
  { name: "enfourchement", difficulte: "moyen" },
];

app.get("/api/techniques", (req, res) => {
  res.json(items);
});

app.post("/api/techniques", (req, res) => {
  console.log(req.body);
  const technique = new Techniques(req.body);
  technique.save();
  res.sendStatus(201);
});

app.delete("/api/techniques/{id}", (req, res) => {
   res.sendStatus(204);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});