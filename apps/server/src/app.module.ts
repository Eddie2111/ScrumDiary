import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { AppController } from './app.controller';
import { TodoModule } from './todo/todo.module';
import { BoardModule } from './board/board.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TodoModule, BoardModule, MikroOrmModule.forRoot(), UserModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
