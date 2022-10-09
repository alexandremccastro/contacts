import { Request, Response } from "express";
import { UserService } from "@app/user/user.service";
import {RegisterValidator} from "@core/validations/auth/register.validator";
import {ValidationError} from "@core/errors/validation.error";
import {LoginValidator} from "@core/validations/auth/login.validator";
import {compare} from "bcrypt";
import {JwtService} from "@app/auth/jwt.service";

export class AuthController {
  private jwtService: JwtService;
  private userService: UserService;

  constructor() {
    this.userService = new UserService()
    this.jwtService = new JwtService()
  }

  async login(req: Request, res: Response) {

    try {
      const loginValidator = new LoginValidator();
      const validated = await loginValidator.validate(req.body)
      const { email, password } = validated
      const result = await this.userService.findOne({ email })

      if (!(result && await compare(password, result.password))) throw new Error('Invalid credentials.')

      const { name } = result
      const token = this.jwtService.sign({name, email });
      return res.status(200).send({name, email, token})
    } catch (error) {
      if (error instanceof ValidationError) {
        return res.status(422).send(error.params)
      } else if (error instanceof Error) {
        // @ts-ignore
        return res.status(500).send({message: error.message})
      }
    }
  }

  async register(req: Request, res: Response) {
    try {
      const validator = new RegisterValidator()
      const validated = await validator.validate(req.body)
      const data = this.userService.create(validated)
      return res.status(200).send(data)
    } catch (error) {
      if (error instanceof ValidationError) {
        return res.status(422).send(error.params)
      } else {
        return res.status(500).send({message: 'Internal server error.'})
      }
    }
  }

  async logout(req: Request, res: Response) {
    console.log(req)
    res.status(200).send({message: "Logged out successfully."})
  }
}
