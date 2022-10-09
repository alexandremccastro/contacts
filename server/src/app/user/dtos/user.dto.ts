export interface UserDto {
  uuid?: string,
  name: string,
  email: string,
  password: string,
  createdAt?: Date,
  updatedAt?: Date,
  deletedAt?: Date
}