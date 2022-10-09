import { object, string, ref} from 'yup'
import {BaseValidator} from "@core/validations/base.validator";

export class LoginValidator extends BaseValidator {
  rules(): any {
    return object({
      email: string().required(),
      password: string().min(8).required(),
    });
  }
}
