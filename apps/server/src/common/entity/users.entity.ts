import {
    Entity,
    PrimaryKey,
    Property,
    Unique,
    OneToMany,
    Collection,
    ManyToMany,
} from '@mikro-orm/core';
import { Task } from './tasks.entity';
import { Boards } from './boards.entity';
import { CommonBase } from './common-base.entity';

@Entity()
export class Users extends CommonBase{
    @Property()
    name?: string;

    @Property()
    @Unique()
    email?: string;

    @Property()
    password!: string;

    @OneToMany(() => Boards, (boards) => boards.createdBy)
    createdBoards = new Collection<Boards>(this);

    @OneToMany(() => Task, (task) => task.createdBy)
    tasks = new Collection<Task>(this);

    @ManyToMany(() => Boards, board => board.members, { owner: true })
    memberOfBoards = new Collection<Boards>(this);
}