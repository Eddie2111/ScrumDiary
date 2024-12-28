import { Entity, PrimaryKey, Property, ManyToOne, ManyToMany, Collection, Index } from "@mikro-orm/core";
import { User } from "./users.entity";

@Entity()
@Index({ properties: ['name'] })

export class Task {
    @PrimaryKey()
    id!: number; // Auto-increment primary key

    @Property()
    name!: string;

    @Property({ onCreate: () => new Date() })
    createdAt!: Date; // Default value as `now()`

    @Property({ onUpdate: () => new Date() })
    updatedAt!: Date; // Updated whenever the entity is updated

    @ManyToOne(() => User)
    createdBy!: User; // Many-to-one relation with User
}
