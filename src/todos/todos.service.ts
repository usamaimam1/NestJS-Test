import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Todo } from './dto/todos.dto';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  getTodos(userId: number) {
    return this.prisma.todo.findMany({ where: { userId: userId } });
  }

  addTodo(dto: Todo, userId: number) {
    return this.prisma.todo.create({
      data: {
        title: dto.title,
        description: dto.description,
        dueDate: dto.description,
        userId: userId,
      },
    });
  }
}
