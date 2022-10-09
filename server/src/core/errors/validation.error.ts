
import {BaseError} from "@core/errors/base.error";

export class ValidationError extends BaseError {
  params: {};

  constructor(message: string, params: any) {
    super(message);
    this.params = params;
  }
}
