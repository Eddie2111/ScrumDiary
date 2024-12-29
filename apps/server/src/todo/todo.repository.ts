import { Injectable } from '@nestjs/common';
import { Task } from 'src/common/entity/tasks.entity';
import { EntityManager } from "@mikro-orm/postgresql";
import { CreateTodoDto } from './dto/create-todo.dto';
import { Boards } from 'src/common/entity/boards.entity';
import { UpdateTodoDto } from './dto/update-todo.dto';


@Injectable()
export class TodoRepository {
    constructor(
        private readonly em: EntityManager
    ) {}

    async getTaskById(id: number): Promise<Task> {
        const task = await this.em.findOne(Task, { id: id });
        return task;
    }
    async getTasksByBoardId(id: number): Promise<Task[]> {
        const tasks = await this.em.find(Task, { board: id });
        return tasks;
    }

    async createTask(user: CreateTodoDto): Promise<Task> {
        const newTask = new Task();
        const board = await this.em.findOne(Boards, { id: user.board });
        newTask.name = user.name;
        newTask.description = user.description;
        newTask.board = board;
        newTask.createdAt = new Date();
        newTask.updatedAt = new Date();

        await this.em.persistAndFlush(newTask);

        return newTask;
    }

    async updateTask(id: number, user: UpdateTodoDto): Promise<Task> {
        const task = await this.em.findOne(Task, { id: id });
        task.name = user.name;
        task.description = user.description;
        task.updatedAt = new Date();

        await this.em.persistAndFlush(task);

        return task;
    }

    async deleteTask(id: number): Promise<Task> {
        const task = await this.em.findOne(Task, { id: id });
        await this.em.removeAndFlush(task);

        return task;
    }
}
