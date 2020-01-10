import { ConnectionOptions } from 'typeorm';

// NOTE: Used only for migrations
const dbConfig: ConnectionOptions = {
  type: process.env.DB_TYPE as any || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: +process.env.DB_PORT || 5432,
  username: process.env.DB_USER || 'car_api_admin',
  password: process.env.DB_PASSWORD || 'admin',
  database: process.env.DB_NAME || 'cars',
  entities: [
    'src/**/*.entity{.ts,.js}',
  ],
  migrations: ['src/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/migrations',
  },
  migrationsRun: true,
};

export = dbConfig;
