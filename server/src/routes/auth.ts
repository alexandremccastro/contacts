
import { Router } from "express";
import {AuthController} from "@app/auth/auth.controller";

const authRouter: Router = Router()
const authController = new AuthController();

authRouter.get('/login', authController.login)

export default authRouter