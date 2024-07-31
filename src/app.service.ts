import { Injectable } from '@nestjs/common';
import { connectionSource } from './config/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class AppService {
  private readonly dataSource: DataSource = connectionSource;

  getHello(): string {
    // this.dataSource.getRepository();
    return 'Hello World!';
  }
}
