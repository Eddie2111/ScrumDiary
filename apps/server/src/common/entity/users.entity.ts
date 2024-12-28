import {
    Entity,
    PrimaryKey,
    Property,
    Unique,
    OneToMany,
    Collection,
} from '@mikro-orm/core';
// import { Account } from './account.entity';
// import { Session } from './session.entity';
// import { Post } from './post.entity';
import { Task } from './tasks.entity';

@Entity()
export class User {
    @PrimaryKey()
    id!: string; // Primary key with `cuid` (you can generate this in your app)

    @Property({ nullable: true })
    name?: string; // Nullable property

    @Property({ nullable: true })
    @Unique()
    email?: string; // Nullable and unique

    @Property({ nullable: true })
    emailVerified?: Date; // Nullable Date property

    @Property({ nullable: true })
    image?: string; // Nullable image URL

    // @OneToMany(() => Account, (account) => account.user)
    // accounts = new Collection<Account>(this); // One-to-many relation with Account

    // @OneToMany(() => Session, (session) => session.user)
    // sessions = new Collection<Session>(this); // One-to-many relation with Session

    // @OneToMany(() => Post, (post) => post.createdBy)
    // posts = new Collection<Post>(this); // One-to-many relation with Post

    @OneToMany(() => Task, (task) => task.createdBy)
    task = new Collection<Task>(this); // One-to-many relation with Todo
}
