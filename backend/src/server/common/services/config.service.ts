import { Injectable, Scope } from '@nestjs/common';
import { ConnectionOptions } from 'typeorm';

@Injectable({ scope: Scope.DEFAULT })
export class ConfigService {
  private readonly dbConnectionOptions: ConnectionOptions;

  constructor() {
    this.dbConnectionOptions = {
      type: process.env.DB_TYPE as any || 'postgres',
      host: process.env.DB_HOST || 'database',
      port: +process.env.DB_PORT || 5432,
      username: process.env.DB_USER || 'car_api_admin',
      password: process.env.DB_PASSWORD || 'admin',
      database: process.env.DB_NAME || 'cars',
    };
  }

  get dbConfig() {
    return this.dbConnectionOptions;
  }
}
