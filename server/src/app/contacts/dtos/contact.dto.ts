export interface ContactDto {
  uuid?: string,
  firstName?: string,
  lastName?: string,
  company?: string,
  jobTitle?: string,
  email?: string,
  phoneNumber?: string,
  notes?:string,
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
}