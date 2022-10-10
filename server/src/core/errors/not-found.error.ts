import { BaseError } from "@core/errors/base.error";

export class NotFoundError extends BaseError {
  constructor(message: string) {
    super(message, 422);
  }
}
