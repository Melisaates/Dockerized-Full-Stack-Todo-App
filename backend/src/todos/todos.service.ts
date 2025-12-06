import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.todo.findMany();
  }

  create(data: { title: string; completed: boolean }) {
    return this.prisma.todo.create({ data });
  }

  update(id: number, data: { completed: boolean }) {
    return this.prisma.todo.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.todo.delete({ where: { id } });
  }
}
