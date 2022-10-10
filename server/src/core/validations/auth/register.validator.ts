import { object, string, ref} from 'yup'
import {BaseValidator} from "@core/validations/base.validator";
import {UserService} from "@app/user/user.service";

export class RegisterValidator extends BaseValidator {

  rules(): any {
    return object({
      name: string().required(),
      email: string()
        .required()
        .test({
          message: "This email is already used.",
          test: async (value) => {
            const userService = new UserService();
            const found = await userService.findOne({ email: value });
            return !found;
          },
        }),
      password: string().required()
    });
  }
}
