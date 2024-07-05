import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity()
export class Company extends BaseEntity{
  @Column()
  name: string;

  @Column()
  logo: string;
}
