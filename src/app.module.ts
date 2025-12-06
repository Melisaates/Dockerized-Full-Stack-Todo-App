import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { PrismaService } from './prisma/prisma.service';
import { TodosService } from './todos/todos.service';
import { TodosController } from './todos/todos.controller';


@Module({
  imports: [TodosModule],
  controllers: [AppController, TodosController],
  providers: [AppService, PrismaService, TodosService],
})
export class AppModule {}
