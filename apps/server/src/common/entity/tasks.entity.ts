import { Entity, Property, ManyToOne } from "@mikro-orm/core";
import { Users } from "./users.entity";
import { Enum_TASK_STATUS } from "../enums/status.enums";
import { Boards } from "./boards.entity";
import { CommonBase } from "./common-base.entity";

@Entity()
export class Task extends CommonBase {
    @Property()
    name!: string;

    @Property()
    description!: string;

    @Property()
    status!: Enum_TASK_STATUS;

    @ManyToOne(() => Users)
    createdBy!: Users;

    @ManyToOne(() => Boards)
    board!: Boards;
}