import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoRepository } from './todo.repository';

@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}
  create(createTodoDto: CreateTodoDto) {
    return this.todoRepository.createTask(createTodoDto);
  }

  findAllByBoard(id: string) {
    return this.todoRepository.getTasksByBoardId(parseInt(id));
  }

  findOne(id: number) {
    return this.todoRepository.getTaskById(id);
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.todoRepository.updateTask(id, updateTodoDto);
  }

  remove(id: number) {
    return this.todoRepository.deleteTask(id);
  }
}
