import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  findAll() {
    return this.todosService.findAll();
  }

  @Post()
  create(@Body() data: { title: string; completed: boolean }) {
    return this.todosService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: { completed: boolean }) {
    return this.todosService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todosService.remove(+id);
  }
}
