import { v4 as uuid4 } from "uuid";
import { Repository } from "@core/database/repository";
import { CreateContactDto } from "@app/contacts/dtos/create-contact.dto";
import { FindContactDto } from "@app/contacts/dtos/find-contact.dto";

export class ContactRepository extends Repository {
  async createOne(userUUID: string, contact: CreateContactDto) {
    return this.session.run(
      `CREATE (c:Contact {uuid: $uuid, firstName: $firstName, 
            lastName: $lastName, email: $email, company: $company, 
            jobTitle: $jobTitle, phoneNumber: $phoneNumber, notes: $notes, 
            createdAt: $createdAt, updatedAt: $updatedAt, deletedAt: $deletedAt})
            WITH c MATCH (u:User {uuid: $userUUID})
            WITH c, u CREATE (c)-[:BELONGS]->(u) RETURN c, u`,
      {
        uuid: uuid4(),
        userUUID,
        ...contact,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        deletedAt: null,
      }
    );
  }

  async findOne(params: FindContactDto) {
    return this.session.run("MATCH (c:Contact {uuid: $uuid}) RETURN c", {
      ...params,
    });
  }

  async updateOne(uuid: string, contact: CreateContactDto) {
    return this.session.run(
      `MATCH (c:Contact {uuid: $uuid }) SET c.firstName = $firstName, 
            c.lastName = $lastName, c.email = $email, c.company = $company, 
            c.jobTitle = $jobTitle, c.phoneNumber = $phoneNumber, c.notes = $notes, 
            c.updatedAt = $updatedAt RETURN c`,
      {
        uuid,
        ...contact,
        updatedAt: new Date().toISOString(),
      }
    );
  }

  async deleteOne(uuid: string) {
    return this.session.run(
      "MATCH (c:Contact {uuid: $uuid }) SET c.deletedAt = $deletedAt RETURN c",
      {
        uuid,
        deletedAt: new Date().toISOString(),
      }
    );
  }

  async belongsToUser(userUUID: string, contactUUID: string) {
    return this.session.run(
      "MATCH (u:User {uuid: $userUUID})<-[:BELONGS]-(c:Contact {uuid: $contactUUID}) RETURN c",
      {
        userUUID,
        contactUUID,
      }
    );
  }

  async findUserContacts(userUUID: string, perPage: number, skip: number) {
    return this.session.run(
      `MATCH (u:User {uuid: $userUUID})<-[:BELONGS]-(c:Contact) RETURN c SKIP ${skip} LIMIT ${perPage}`,
      {
        userUUID,
      }
    );
  }

  async paginate(page = 1, perPage = 10, userUUID: string) {
    const skip = (page - 1) * perPage;
    const res = await this.session.run(
      `MATCH (u:User {uuid: $userUUID})
              <-[:BELONGS]-(c:Contact) 
              RETURN COUNT(c) as cnt`,
      {
        userUUID,
      }
    );

    const total = res.records.length;
    const lastPage = Math.ceil(total / perPage);
    const results = await this.findUserContacts(userUUID, perPage, skip);

    return {
      data: results.records.map((r) => r.get("c").properties),
      pagination: {
        page,
        perPage,
        lastPage,
      },
    };
  }
}
