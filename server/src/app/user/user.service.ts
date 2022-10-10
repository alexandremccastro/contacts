import { UserRepository } from "@app/user/user.repository";
import { hash } from "bcrypt";
import { UserDto } from "@app/user/dtos/user.dto";
import { FindUserDto } from "@app/user/dtos/find-user.dto";

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(user: UserDto) {
    user.password = await hash(<string>user.password, 10);
    return this.userRepository.create(user);
  }

  async findOne(params: FindUserDto) {
    const { records } = await this.userRepository.findOne(params);

    const record = records.pop();

    if (record) return record.get("u").properties;

    return undefined;
  }
}
