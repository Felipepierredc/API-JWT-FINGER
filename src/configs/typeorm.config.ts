import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    // type: 'mysql',
    // host: 'localhost',
    // port: 3306,
    // username: 'root',
    // password: 'root',
    // database: 'api-nest-db',
    // entities: [__dirname + '/../**/*.entity.{js,ts}'],
    // synchronize: true,
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '25903522',
  database: 'api-nest-db',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};