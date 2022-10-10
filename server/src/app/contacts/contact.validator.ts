import { object, string, ref} from 'yup'
import { BaseValidator } from "@core/validations/base.validator";

export class ContactValidator extends BaseValidator {

  rules(): any {
    return object({
      firstName: string().required(),
      lastName: string().nullable().default(''),
      company: string().nullable().default(''),
      jobTitle: string().nullable().default(''),
      email: string().nullable().default(''),
      phoneNumber: string().required(),
      notes: string().nullable().default(''),
    });
  }
}
