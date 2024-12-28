import { PrimaryKey, Property } from "@mikro-orm/core";

export class CommonBase {
    @PrimaryKey({ autoincrement: true })
    id!: number;

    @Property({ onCreate: () => new Date() })
    createdAt!: Date;

    @Property({ onUpdate: () => new Date() })
    updatedAt!: Date;

}