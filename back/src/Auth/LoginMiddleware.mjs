import express from "express";
import { login } from "./Auth.mjs";
const loginRouter = express.Router();
loginRouter.route("/login").post(login);
export default loginRouter;