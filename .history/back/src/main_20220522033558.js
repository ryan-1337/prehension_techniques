import express from "express";
import bodyParser from "body-parser";
import database from "../../database.mjs";
const app = express();
const port = 3000;

database.connectDB();

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
  items.push(req.body);
  res.sendStatus(201);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});