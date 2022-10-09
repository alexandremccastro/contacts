export interface UserDto {
  name: string,
  email: string,
  password: string,
  createdAt?: Date,
  updatedAt?: Date,
  deletedAt?: Date
}