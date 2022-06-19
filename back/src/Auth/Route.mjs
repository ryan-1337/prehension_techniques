import express from "express";
import { register, login } from "./Auth.mjs";
const router = express.Router();
const userRegister = router.route("/register").post(register)
const userLogin = router.route("/login").post(login)
export { userRegister, userLogin }
