import { LoginDto } from "@app/auth/dtos/login.dto";
import { UserDto } from "@app/user/dtos/user.dto";
import { UserService } from "@app/user/user.service";
import { FindUserDto } from "@app/user/dtos/find-user.dto";
import { compare } from "bcrypt";
import { JwtService } from "@app/auth/jwt.service";

export class AuthService {
  private userService: UserService;
  private jwtService: JwtService;

  constructor() {
    this.userService = new UserService();
    this.jwtService = new JwtService();
  }

  async register(user: UserDto) {
    return this.userService.create(user);
  }
}
