import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@core/helper/constants";

export class JwtService {
  sign(params: any) {
    return jwt.sign(params, JWT_SECRET);
  }

  verify(token: string) {
    return jwt.verify(token, JWT_SECRET);
  }
}
