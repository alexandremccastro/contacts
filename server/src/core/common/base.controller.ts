import { ValidationError } from "@core/errors/validation.error";
import { NotFoundError } from "@core/errors/not-found.error";
import { Response } from "express";

export abstract class BaseController {
  dispatchError(res: Response, error: any) {
    if (error instanceof ValidationError) {
      return res.status(error.code).send(error.params);
    } else if (error instanceof NotFoundError) {
      return res.status(error.code).send({ message: error.message });
    } else {
      return res.status(500).send({ message: error.stack});
    }
  }
}
