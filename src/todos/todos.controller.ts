import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { Todo } from './dto/todos.dto';
import { TodosService } from './todos.service';

@UseGuards(JwtGuard)
@Controller('todos')
export class TodosController {
  constructor(private todoService: TodosService) {}

  @Get()
  async getTodos(@GetUser() user: User) {
    const todos = await this.todoService.getTodos(user.id);
    return todos;
  }

  @Post()
  async addTodo(@Body() dto: Todo, @GetUser() user: User) {
    return this.todoService.addTodo(dto, user.id);
  }
}
