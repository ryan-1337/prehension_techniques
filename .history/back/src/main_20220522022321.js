import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const items = [
  { name: "ryu", hp: 1000 },
  { name: "Bison", hp: 1025 },
];

app.get("/api/fighters", (req, res) => {
  res.json(items);
});

app.post("/api/fighters", (req, res) => {
  items.push(req.body);
  res.sendStatus(201);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});