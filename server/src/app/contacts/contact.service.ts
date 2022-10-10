import {FindUserDto} from '@app/user/dtos/find-user.dto';
import {ContactRepository} from '@app/contacts/contact.repository';
import {CreateContactDto} from '@app/contacts/dtos/create-contact.dto';
import { v4 as uuid4 } from 'uuid'
import {FindContactDto} from "@app/contacts/dtos/find-contact.dto";

export class ContactService {
  private contactRepository: ContactRepository;

  constructor() {
    this.contactRepository = new ContactRepository()
  }

  async createOne(userUUID: string, contact: CreateContactDto) {
    const { records } = await this.contactRepository.createOne(userUUID, contact)
    const record = records.pop()
    if (record) return record.get('c').properties
    return undefined
  }

  async findOne(params: FindContactDto) {
    const { records } = await this.contactRepository.findOne(params);
    const record = records.pop()
    if (record) return record.get('c').properties
    return undefined
  }

  async belongsToUser(userUUID: string, contactUUID: string) {
    const { records } = await this.contactRepository.belongsToUser(userUUID, contactUUID);
    const record = records.pop()
    if (record) return record.get('c').properties
    return undefined
  }

  async updateOne(uuid: string, contact: CreateContactDto) {
    const { records } = await this.contactRepository.updateOne(uuid, contact);
    const record = records.pop()
    if (record) return record.get('c').properties
    return undefined
  }

  async deleteOne(uuid: string) {
    return this.contactRepository.deleteOne(uuid);
  }

  async undeleteOne(uuid: string) {
    return this.contactRepository.undeleteOne(uuid);
  }

  async paginate(page: number, perPage: number, userUUID: string, trashed = false) {
    return this.contactRepository.paginate(page, perPage, userUUID, trashed)
  }
}
