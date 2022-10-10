import { BaseError } from "@core/errors/base.error";

export class ValidationError extends BaseError {
  params: {};

  constructor(message: string, params: any) {
    super(message, 422);
    this.params = params;
  }
}
