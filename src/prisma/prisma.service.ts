import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor() {
    const accelerateUrl = process.env.PRISMA_ACCELERATE_URL;
    
    super({
      ...(accelerateUrl && { accelerateUrl }),
      log: ['query', 'info', 'warn', 'error'],
    });
    
    console.log('PRISMA_ACCELERATE_URL:', accelerateUrl ? 'Set' : 'Not set');
  }
  
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}