import express from "express";
import { register } from "./Auth.mjs";
const registerRouter = express.Router();
registerRouter.route("/register").post(register);
export default registerRouter;