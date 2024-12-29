import { Injectable } from '@nestjs/common';
import { EntityManager } from "@mikro-orm/postgresql";
import { Boards } from 'src/common/entity/boards.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Users } from 'src/common/entity/users.entity';


@Injectable()
export class BoardRepository {
    constructor(
        private readonly em: EntityManager
    ) {}

    async getBoardById(id: number): Promise<Boards> {
        const task = await this.em.findOne(Boards, { id: id });
        return task;
    }
    async getBoardsById(id: number): Promise<Boards[]> {
        const boards = await this.em.find(Boards, { createdBy: id });
        return boards;
    }

    async createBoard(userId: number, board: CreateBoardDto): Promise<Boards> {
        const newBoard = new Boards();
        const user = await this.em.findOne(Users, { id: userId });
        newBoard.name = board.name;
        newBoard.description = board.description;
        newBoard.createdBy = user;
        newBoard.createdAt = new Date();
        newBoard.updatedAt = new Date();

        await this.em.persistAndFlush(newBoard);

        return newBoard;
    }

    async updateBoard(id: number, board: UpdateBoardDto): Promise<Boards> {
        const updateBoard = await this.em.findOne(Boards, { id: id });
        updateBoard.name = board.name;
        updateBoard.description = board.description;
        updateBoard.updatedAt = new Date();

        await this.em.persistAndFlush(updateBoard);

        return updateBoard;
    }

    async deleteBoard(id: number): Promise<boolean> {
        const deleteOneBoard = await this.em.nativeDelete(Boards, { id: id });
        if (deleteOneBoard>0) return true;
        else return false;
    }
}
