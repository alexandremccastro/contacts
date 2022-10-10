import { Router } from "express";
import auth from '@core/middleware/auth.middleware'
import {ContactController} from "@app/contacts/contact.controller";

const contactRouter: Router = Router()
const contactController = new ContactController();

contactRouter.get('/', auth, (req, res) => contactController.index(req, res))
contactRouter.post('/', auth, (req, res) => contactController.create(req, res))
contactRouter.put('/:uuid', auth, (req, res) => contactController.update(req, res))
contactRouter.get('/:uuid', auth, (req, res) => contactController.find(req, res))
contactRouter.delete('/:uuid', auth,(req, res) => contactController.delete(req, res))

export default contactRouter