import { Entity, Property, ManyToOne, OneToMany, Collection, ManyToMany } from "@mikro-orm/core";
import { Users } from "./users.entity";
import { Task } from "./tasks.entity";
import { CommonBase } from "./common-base.entity";

@Entity()
export class Boards extends CommonBase {

    @Property()
    name!: string;

    @Property()
    description!: string;

    @ManyToMany(() => Users, user => user.memberOfBoards, { mappedBy: 'memberOfBoards' })
    members = new Collection<Users>(this);

    @OneToMany(() => Task, (task) => task.board)
    tasks = new Collection<Task>(this);

    @ManyToOne(() => Users)
    createdBy!: Users;
}
