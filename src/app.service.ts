import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello. My name is Melisa. Welcome to my world!';
  }
}
