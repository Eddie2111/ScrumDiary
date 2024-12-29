import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { BoardRepository } from './board.repository';

@Injectable()
export class BoardService {
  constructor(
    private readonly boardRepository: BoardRepository
  ) {}
  create(createBoardDto: CreateBoardDto) {
    const user = 1;
    return this.boardRepository.createBoard(user,createBoardDto);
  }

  findAll(userId?: number) {
    const user = userId ?? 1;
    return this.boardRepository.getBoardsById(user);
  }

  findOne(id: number) {
    return this.boardRepository.getBoardById(id);
  }

  update(id: number, updateBoardDto: UpdateBoardDto) {
    const boardId = id;
    return this.boardRepository.updateBoard(boardId,updateBoardDto);
  }

  remove(id: number) {
    return this.boardRepository.deleteBoard(id);
  }
}
