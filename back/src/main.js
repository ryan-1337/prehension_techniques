import express from "express";
import bodyParser from "body-parser";
import { connectToDb, Techniques } from "../database.mjs";
const app = express();
const port = 3000;

let db = connectToDb();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const items = [
  { name: "bras a la volee", difficulte: "simple" },
  { name: "enfourchement", difficulte: "moyen" },
];

app.get("/api/techniques", (req, res) => {
  Techniques.find((err, techniques) => {
    if(err) return res.status(500).send(err)

    return res.status(200).send(techniques);
  })
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
    const response = {
        message: "Techniques successfully deleted",
    };
    return res.status(200).send(response);
    });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});