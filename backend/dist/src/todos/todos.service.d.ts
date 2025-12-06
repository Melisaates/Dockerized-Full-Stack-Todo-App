import { PrismaService } from '../prisma/prisma.service';
export declare class TodosService {
    private prisma;
    constructor(prisma: PrismaService);
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
    update(id: number, data: {
        completed: boolean;
    }): import(".prisma/client").Prisma.Prisma__TodoClient<{
        id: number;
        title: string;
        completed: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__TodoClient<{
        id: number;
        title: string;
        completed: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
