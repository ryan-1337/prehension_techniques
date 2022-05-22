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

app.delete("/api/techniques/:id", (req, res) => {
    Techniques.findByIdAndRemove(req.params.id, (err, techniques) => {
    if (err) return res.status(500).send(err);
    // We'll create a simple object to send back with a message and the id of the document that was removed
    // You can really do this however you want, though.
    const response = {
        message: "Techniques successfully deleted",
        id: techniques._id
    };
    return res.status(200).send(response);
    });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});