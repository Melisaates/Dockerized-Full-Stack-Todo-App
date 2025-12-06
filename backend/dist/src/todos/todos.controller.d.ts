import { TodosService } from './todos.service';
export declare class TodosController {
    private readonly todosService;
    constructor(todosService: TodosService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        title: string;
        completed: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    create(data: {
        title: string;
        completed: boolean;
    }): import(".prisma/client").Prisma.Prisma__TodoClient<{
        id: number;
        title: string;
        completed: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, data: {
        completed: boolean;
    }): import(".prisma/client").Prisma.Prisma__TodoClient<{
        id: number;
        title: string;
        completed: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__TodoClient<{
        id: number;
        title: string;
        completed: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
