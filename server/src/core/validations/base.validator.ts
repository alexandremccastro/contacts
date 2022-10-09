import {ValidationError} from "@core/errors/validation.error";
import {ObjectSchema} from "yup";


export abstract class BaseValidator {
  abstract rules(): any;

  async validate(data: any) {
    try {
      return  await this.rules().validate(data, { abortEarly: false });
    } catch (e) {
      const errors = this.mapErrors(e);
      throw new ValidationError("Validation error.", errors);
    }
  }

  private mapErrors(error: any) {
    return Object.values(error.inner).reduce((prev: any, curr: any) => {
      if (Array.isArray(prev[curr.path])) {
        prev[curr.path].concat(curr.errors);
      } else {
        Object.assign(prev, { [curr.path]: curr.errors });
      }

      return prev;
    }, {});
  }
}
