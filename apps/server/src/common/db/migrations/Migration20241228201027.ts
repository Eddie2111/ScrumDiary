import { Migration } from '@mikro-orm/migrations';

export class Migration20241228201027 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "users" ("id" serial primary key, "created_at" timestamptz not null, "updated_at" timestamptz not null, "name" varchar(255) not null, "email" varchar(255) not null, "password" varchar(255) not null);`);
    this.addSql(`alter table "users" add constraint "users_email_unique" unique ("email");`);

    this.addSql(`create table "boards" ("id" serial primary key, "created_at" timestamptz not null, "updated_at" timestamptz not null, "name" varchar(255) not null, "description" varchar(255) not null, "created_by_id" int not null);`);

    this.addSql(`create table "task" ("id" serial primary key, "created_at" timestamptz not null, "updated_at" timestamptz not null, "name" varchar(255) not null, "description" varchar(255) not null, "status" varchar(255) not null, "created_by_id" int not null, "board_id" int not null);`);

    this.addSql(`create table "users_member_of_boards" ("users_id" int not null, "boards_id" int not null, constraint "users_member_of_boards_pkey" primary key ("users_id", "boards_id"));`);

    this.addSql(`alter table "boards" add constraint "boards_created_by_id_foreign" foreign key ("created_by_id") references "users" ("id") on update cascade;`);

    this.addSql(`alter table "task" add constraint "task_created_by_id_foreign" foreign key ("created_by_id") references "users" ("id") on update cascade;`);
    this.addSql(`alter table "task" add constraint "task_board_id_foreign" foreign key ("board_id") references "boards" ("id") on update cascade;`);

    this.addSql(`alter table "users_member_of_boards" add constraint "users_member_of_boards_users_id_foreign" foreign key ("users_id") references "users" ("id") on update cascade on delete cascade;`);
    this.addSql(`alter table "users_member_of_boards" add constraint "users_member_of_boards_boards_id_foreign" foreign key ("boards_id") references "boards" ("id") on update cascade on delete cascade;`);
  }

}
