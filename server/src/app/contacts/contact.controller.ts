import { Request, Response } from "express";
import { RegisterValidator } from "@core/validations/auth/register.validator";
import { ValidationError } from "@core/errors/validation.error";
import { JwtService } from "@app/auth/jwt.service";
import { ContactValidator } from "@app/contacts/contact.validator";
import { ContactService } from "@app/contacts/contact.service";
import { NotFoundError } from "@core/errors/not-found.error";
import { BaseController } from "@core/common/base.controller";
import {SearchValidator} from "@app/contacts/search.validator";

export class ContactController extends BaseController {
  private jwtService: JwtService;
  private contactService: ContactService;

  constructor() {
    super();
    this.contactService = new ContactService();
    this.jwtService = new JwtService();
  }

  async index(req: Request, res: Response) {
    try {
      const { user } = req as any;
      const searchValidator = new SearchValidator()
      const {page, perPage }  = await searchValidator.validate(req.query)
      const data = await this.contactService.paginate(page, perPage, user.uuid);
      return res.status(200).send(data);
    } catch (error) {
      return this.dispatchError(res, error);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const contactValidator = new ContactValidator();
      const validated = await contactValidator.validate(req.body);
      const { user } = req as any;
      const result = await this.contactService.createOne(user.uuid, validated);
      return res.status(200).send({ data: result });
    } catch (error) {
      return this.dispatchError(res, error);
    }
  }

  async find(req: Request, res: Response) {
    try {
      const { user } = req as any;
      const { uuid } = req.params;

      console.log(user.uuid, uuid);
      if (!(await this.contactService.belongsToUser(user.uuid, uuid)))
        throw new NotFoundError("Not found.");
      const data = await this.contactService.findOne(req.params);

      return res.status(200).send(data);
    } catch (error) {
      return this.dispatchError(res, error);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const validator = new ContactValidator();
      const validated = await validator.validate(req.body);
      const { uuid } = req.params;
      const data = this.contactService.updateOne(uuid, validated);
      return res.status(200).send(data);
    } catch (error) {
      return this.dispatchError(res, error);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { uuid } = req.params;
      await this.contactService.deleteOne(uuid);
      return res.status(200).send();
    } catch (error) {
      return this.dispatchError(res, error);
    }
  }
}
