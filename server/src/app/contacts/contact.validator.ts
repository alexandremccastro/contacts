import { object, string, ref} from 'yup'
import { BaseValidator } from "@core/validations/base.validator";

export class ContactValidator extends BaseValidator {

  rules(): any {
    return object({
      firstName: string().max(100).required(),
      lastName: string().max(100).nullable().default(''),
      company: string().max(100).nullable().default(''),
      jobTitle: string().max(100).nullable().default(''),
      email: string().max(100).nullable().default(''),
      phoneNumber: string().max(100).required(),
      notes: string().max(100).nullable().default(''),
    });
  }
}
