import { Request, Response } from "express";

export class AuthController {
  public login(req: Request, res: Response) {
    res.status(200).send({message: "login"})
  }
}
