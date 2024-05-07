import { BaseModel } from './BaseModel'

export interface UserModel extends BaseModel {
  username: string
  password: string
}
