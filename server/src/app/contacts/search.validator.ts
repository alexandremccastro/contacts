import { object, number} from 'yup'
import { BaseValidator } from "@core/validations/base.validator";

export class SearchValidator extends BaseValidator {

  rules(): any {
    return object({
      page: number().required(),
      perPage: number().required(),
    });
  }
}
