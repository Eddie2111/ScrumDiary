import { Exclude } from 'class-transformer';

export class UserSerializer {
  id: number;
  email: string;

  @Exclude()
  password: string;
  createdBoards: any;
  tasks: any;
  memberOfBoards: any;

  constructor(partial: Partial<UserSerializer>) {
    Object.assign(this, partial);
  }
}
