import {
    Entity,
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

    @OneToMany(() => Boards, (boards) => boards.createdBy, { lazy: true })
    createdBoards = new Collection<Boards>(this);

    @OneToMany(() => Task, (task) => task.createdBy, { lazy: true })
    tasks = new Collection<Task>(this);

    @ManyToMany(() => Boards, (board) => board.members, { owner: true, lazy: true })
    memberOfBoards = new Collection<Boards>(this);
}