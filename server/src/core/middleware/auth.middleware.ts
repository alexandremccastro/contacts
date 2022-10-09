import { NextFunction, Request, Response } from "express";
import {JwtService} from "@app/auth/jwt.service";
import {FindUserDto} from "@app/user/dtos/find-user.dto";
import {UserService} from "@app/user/user.service";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.headers.authorization)
      throw new Error('Permission denied.')

    const [, token] = req.headers.authorization.split(' ')
    const jwtService = new JwtService()

    const { email } = jwtService.verify(token) as any
    const userService = new UserService()

    Object.assign(req, {
      user: await userService.findOne({ email })
    })

    next()
  } catch (e) {
    if (e instanceof Error) res.status(500).send({message: e.message})
  }
}
