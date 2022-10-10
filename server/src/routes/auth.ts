
import { Router } from "express";
import { AuthController } from "@app/auth/auth.controller";
import auth from '@core/middleware/auth.middleware'

const authRouter: Router = Router()
const authController = new AuthController();

authRouter.post('/login', (req, res) => authController.login(req, res))
authRouter.post('/register', (req, res) => authController.register(req, res))
authRouter.post('/logout', auth,(req, res) => authController.logout(req, res))

export default authRouter