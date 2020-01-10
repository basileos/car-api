import { Module } from '@nestjs/common';
import { CarModule } from './cars/car.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from './common/services/config.service';
import { loadDotEnv } from './dotenv';

loadDotEnv();
const configService = new ConfigService();

@Module({
  imports: [
    TypeOrmModule.forRoot({
    ...configService.dbConfig,
      entities: [
        `${__dirname}/**/*.entity{.ts,.js}`,
        `${__dirname}/**/*.repository{.ts,.js}`,
      ],
      migrations: [`${__dirname}/migrations/*{.js,.ts}`],
      cli: {
        migrationsDir: `${__dirname}/migrations`,
      },
      migrationsRun: true,
      logging: true,
    }),
    CarModule],
})
export class AppModule {}
