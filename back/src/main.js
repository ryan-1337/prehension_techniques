import express from "express";
import bodyParser from "body-parser";
import { connectToDb, Techniques } from "../database.mjs";
import loginRouter from "./Auth/RegisterMiddleware.mjs"
import registerRouter from "./Auth/LoginMiddleware.mjs"
const app = express();
const port = 3000;

/**
 * Connection to database
 */
let db = connectToDb();

app.use(bodyParser.json());

/**
 * Home page
 */
app.get("/", (req, res) => {
  res.send("Hello World!");
});

/**
 * READ
 */
app.get("/api/techniques", (req, res) => {
  Techniques.find((err, techniques) => {
    if(err) return res.status(500).send(err)

    return res.status(200).send(techniques);
  })
});

/**
 * CREATE
 */
app.post("/api/techniques", (req, res) => {
  console.log(req.body);
  const technique = new Techniques(req.body);
  technique.save();
  res.sendStatus(201);
});

/**
 * UPDATE
 */
app.put("/api/techniques/:id", (req,res) => {
  Techniques.findByIdAndUpdate(req.params.id, req.body, {new: true},

    // the callback function
    (err, todo) => {
    // Handle any possible database errors
        if (err) return res.status(500).send(err);
        return res.send(todo);
    })
})

/**
 * DELETE
 */
app.delete("/api/techniques/:id", (req, res) => {
    Techniques.findByIdAndRemove(req.params.id, (err, techniques) => {
    if (err) return res.status(500).send(err);
    const response = {
        message: "Techniques successfully deleted",
    };
    return res.status(200).send(response);
    });
})

/*********************************************** AUTH ************************************************/

/**
 * USER REGISTER
 */
 app.use("/api/auth", registerRouter);

/**
 * USER Login
 */
 app.use("/api/auth", loginRouter);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});