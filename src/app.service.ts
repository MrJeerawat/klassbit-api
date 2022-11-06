import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return [
      { id: 0, title: 'Hello' },
      { id: 1, title: 'World' },
    ];
  }
}
