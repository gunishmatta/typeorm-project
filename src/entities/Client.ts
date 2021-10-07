import {
  Entity,
  BaseEntity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("client")
export class Client extends BaseEntity {
  @PrimaryColumn({
    type: "uuid",
  })
  id: "string";
  @Column()
  first_name: string;
  @Column()
  last_name: string;

  @Column({ unique: true })
  email: string;
  @Column({
    unique: true,
    length: 10,
  })
  card_number: string;
  @Column({
    type: "numeric",
  })
  balance: number;

  @Column({
    default: true,
    name: "Active",
  })
  is_active: boolean;

  @Column({
    type: "simple-json",
    nullable: true,
  })
  additional_info: {
    age: number;
  };

  @Column({
    type: "simple-array",
    default: [],
  })
  family_members: string[];

  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;
}
