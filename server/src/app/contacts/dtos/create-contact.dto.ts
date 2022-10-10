
export interface CreateContactDto {
  uuid?: string,
  firstName: string,
  lastName?: string,
  company?: string,
  jobTitle?: string,

  phoneNumber: string,
  notes?:string,
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
}