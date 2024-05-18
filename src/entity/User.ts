import { Entity, PrimaryGeneratedColumn, Column, BaseEntity , CreateDateColumn, UpdateDateColumn} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
@Entity()
export class UserEntity extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id!: number;

  @Field()
  @Column()
  username!: string;

  @Field()
  @Column()
  email! : string;

  @Field()
  @CreateDateColumn()
  created_at?: Date;

  @Field()
  @UpdateDateColumn()
  updated_at?: Date;
}
