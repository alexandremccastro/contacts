import { object, string, ref} from 'yup'
import {BaseValidator} from "@core/validations/base.validator";
import {UserService} from "@app/user/user.service";

export class RegisterValidator extends BaseValidator {

  rules(): any {
    return object({
      name: string().max(100).required(),
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
      password: string().min(8).required(),
      password_confirmation: string()
        .oneOf(
          [ref("password"), null],
          "Password confirmation doesn't match password."
        )
        .required(),
    });
  }
}
