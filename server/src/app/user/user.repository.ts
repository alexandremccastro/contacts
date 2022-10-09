
import { v4 as uuid4 } from 'uuid'
import { Repository } from "@core/database/repository";
import { UserDto } from "@app/user/dtos/user.dto";
import {FindUserDto} from "@app/user/dtos/find-user.dto";

export class UserRepository extends Repository {
  async create(user: UserDto) {
    return this.session.run(
      "CREATE (u:User {name: $name, email: $email, password: $password, createdAt: $createdAt, updatedAt: $updatedAt, deletedAt: $deletedAt})",
      {
        uuid: uuid4(),
        ...user,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        deletedAt: null,
      }
    );
  }

  async findOne(params: FindUserDto) {
    return this.session.run("MATCH (u:User) WHERE u.email = $email RETURN u", {
      ...params,
    });
  }
}
